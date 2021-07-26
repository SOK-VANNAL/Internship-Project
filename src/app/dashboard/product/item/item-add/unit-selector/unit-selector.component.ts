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
  isLoading:boolean=true

  validateForm!: FormGroup;
  subscriptions: Subscription[] = [];
  onChange: any = () => {};
  onTouched: any = () => {};

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

  onAdd(){
    console.log('add')
  }
  onOpenChange(){
    if(!this.isAlreadyClick){
      this.isLoading=true
      this.isAlreadyClick = true;
      this.productService.getUnitType().subscribe(
        (result:any)=>{
          this.unitItemTypes = result.results
          this.isLoading = false
        },
        (err)=>{
          console.log(err)
        }
      )
    }
  }
}



