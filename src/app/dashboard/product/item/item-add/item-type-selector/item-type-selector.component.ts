import { Component, OnInit, forwardRef, Input, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/service/product-service/product.service';
import { FormBuilder, FormGroup, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Subscription } from 'rxjs';

export interface ItemTypeSelectorValue {
  itemType:string;
}

@Component({
  selector: 'app-item-type-selector',
  templateUrl: './item-type-selector.component.html',
  styleUrls: ['./item-type-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ItemTypeSelectorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ItemTypeSelectorComponent),
      multi: true
    }
  ]
})
export class ItemTypeSelectorComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() nzSpan:number = 24;
  @Input() addButton:boolean = true;
  // selectedItemType:any="";
  isAlreadyClick:boolean=false;
  itemTypes:any=[];
  isLoading:boolean=true
  isNextDataLoading = false;
  
  validateForm!: FormGroup;
  subscriptions: Subscription[] = [];
  onChange: any = () => {};
  onTouched: any = () => {};

  isVisible:boolean = false;
  isOkLoading:boolean = false;
  itemAddForm!: FormGroup;

  indexPage:number = 1;
  valueSearch:string="";


  constructor(private productService: ProductService, private fb: FormBuilder) { 
    this.validateForm = this.fb.group({
      selectedItemType: [null, [Validators.required]]
    })
    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.validateForm.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );

    this.itemAddForm = this.fb.group({
      name: [null, [Validators.required]],
      note: [null],
      itemClass: [null, [Validators.required]]

    })
  }
 

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  get value(): ItemTypeSelectorValue {
    return this.validateForm.value;
  }

  set value(value: ItemTypeSelectorValue) {
    this.validateForm.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  get selectedItemTypeControl() {
    return this.validateForm.controls.selectedItemType;
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

  validate(_: FormControl) {
    return this.validateForm.valid ? null : { profile: { valid: false, } };
  }

  showModal(){
    this.isVisible = !this.isVisible;
  }

  handleOk(): void {

    if(this.itemAddForm.valid){
      this.isOkLoading = true;
      this.productService.addItemType(this.itemAddForm.value.name, this.itemAddForm.value.note, this.itemAddForm.value.itemClass).subscribe(
        (result)=>{
          console.log(result)
          this.isOkLoading = false;
          this.isVisible = false;
          this.itemAddForm.reset();
          this.getItemType(1, 25, '', '');
        },
        (err)=>{
          console.log(err);
        }

      )
    }
  }

  handleCancel(): void {
    this.isVisible = false;
    this.itemAddForm.reset();
  }


  onAdd(){
    console.log('add')
    console.log(this.selectedItemTypeControl.touched)
    
  }
  onOpenChange(){
    if(!this.isAlreadyClick){
      this.isAlreadyClick = true;
      this.getItemType(1, 25, '', '');
    }
  }
  getItemType(pageIndex:number, pageSize:number, sorts:string, value:string){
    this.isLoading = true
      this.productService.getItemType(pageIndex, pageSize, sorts, value).subscribe(
        (result:any)=>{
          this.itemTypes = result.results;
          this.isLoading= false;
        },
        (err)=>{
          console.log(err)
        }
      )
  };

  onSearch(value:string){
    this.valueSearch=value
    this.getItemType(1, 25, '',value);
    this.indexPage = 1;
  }

  onScrollToBottom(){
    this.isNextDataLoading = true;
    this.productService.getItemType(++this.indexPage,25,'',this.valueSearch).subscribe(
      (result:any) =>{
        this.isNextDataLoading = false;
        if(result.results.length>0){
          result.results.forEach((item:any) =>{
            this.itemTypes.push(item);
          });
        }
      },
      (err)=>{
        console.log(err)
      }
    )
  }

}
