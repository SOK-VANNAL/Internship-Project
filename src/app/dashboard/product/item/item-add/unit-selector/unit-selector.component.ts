import { Component, OnInit, forwardRef, Input, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/service/product-service/product.service';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  NG_VALIDATORS
} from '@angular/forms';
import { Subscription } from 'rxjs';

export interface unitTypeSelectorValue{
  unitType:string;
}

@Component({
  selector: 'app-unit-selector',
  templateUrl: './unit-selector.component.html',
  styleUrls: ['./unit-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UnitSelectorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UnitSelectorComponent),
      multi: true
    }
  ]
})
export class UnitSelectorComponent implements ControlValueAccessor, OnDestroy, OnInit {
  @Input() nzSpan:number = 24;
  @Input() addButton:boolean = true;
  selectedUnitType:any="";
  isAlreadyClick:boolean=false;
  unitItemTypes:any=[];
  isLoading:boolean=true;
  isNextDataLoading = false;

  validateForm!: FormGroup;
  subscriptions: Subscription[] = [];
  onChange: any = () => {};
  onTouched: any = () => {};

  isVisible:boolean = false;
  isOkLoading:boolean = false;
  unitAddForm!: FormGroup;

  indexPage:number = 1;
  valueSearch:string="";

  constructor(private productService: ProductService, private fb:FormBuilder) { 
    this.validateForm = this.fb.group({
      selectedUnitType : [null, [Validators.required]]
    });
    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.validateForm.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );

    this.unitAddForm = this.fb.group({
      name: [null, [Validators.required]],
      note: [null]
    })
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  get selectedUnitTypeControl(){
    return this.validateForm.controls.selectedUnitType;
  };

  get value(): unitTypeSelectorValue {
    return this.validateForm.value;
  }

  set value(value: unitTypeSelectorValue) {
    this.validateForm.setValue(value);
    this.onChange(value);
    this.onTouched();
  }
  writeValue(value: any): void {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.validateForm.reset();
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  // communicate the inner form validation to the parent form
  validate(_: FormControl) {
    return this.validateForm.valid ? null : { profile: { valid: false } };
  }

  showModal(){
    this.isVisible = !this.isVisible;
  }

  onOpenChange(){
    if(!this.isAlreadyClick){
      this.isAlreadyClick = true;
      this.getUnitType(1, 25, '','');
    }
  };

  getUnitType(pageIndex:number, pageSize:number, sorts:string, value:string){
    this.isLoading=true
      this.productService.getUnitType(pageIndex, pageSize, sorts, value).subscribe(
        (result:any)=>{
          this.unitItemTypes = result.results
          this.isLoading = false
        },
        (err)=>{
          console.log(err)
        }
      )
  }

  handleOk(){
    if(this.unitAddForm.valid){
      this.isOkLoading = true;
      this.productService.addUnitItem(this.unitAddForm.value.name, this.unitAddForm.value.note).subscribe(
        (result)=>{
          console.log(result)
          this.isOkLoading = false;
          this.isVisible = false;
          this.unitAddForm.reset();
          this.indexPage = 1;
          this.getUnitType(1, 25, '','');
        },
        (err)=>{
          console.log(err);
        }
      )}
  }

  handleCancel(): void{
    this.isVisible = false;
    this.unitAddForm.reset();
  }

  onSearch(value:string){
    this.valueSearch=value
    this.getUnitType(1, 25, '',value);
    this.indexPage = 1;
  }

  onScrollToBottom(){
    this.isNextDataLoading = true;
    this.productService.getUnitType(++this.indexPage,25,'',this.valueSearch).subscribe(
      (result:any) =>{
        this.isNextDataLoading = false;
        if(result.results.length>0){
          result.results.forEach((item:any) =>{
            this.unitItemTypes.push(item);
          });
        }
      },
      (err)=>{
        console.log(err)
      }
    )
  }

}



