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
  
  validateForm!: FormGroup;
  subscriptions: Subscription[] = [];
  onChange: any = () => {};
  onTouched: any = () => {};

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

  onAdd(){
    console.log('add')
    console.log(this.selectedItemTypeControl.touched)
    
  }
  onOpenChange(){
    if(!this.isAlreadyClick){
      this.isAlreadyClick = true;
      this.isLoading = true
      this.productService.getItemType().subscribe(
        (result:any)=>{
          this.itemTypes = result.results;
          this.isLoading= false;
        },
        (err)=>{
          console.log(err)
        }
      )
    }
  }
}
