import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  submitForm():void {
    console.log(this.validateForm)
    // for (const i in this.validateForm.controls) {
    //   if (this.validateForm.controls.hasOwnProperty(i)) {
    //     this.validateForm.controls[i].markAsDirty();
    //     this.validateForm.controls[i].updateValueAndValidity();
    //   }
    // }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      codeNumber: [null, [Validators.required]],
      itemType: [null, [Validators.required]],
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      note: [null, [Validators.required]],
      barCode: [null],
      unit: [null, [Validators.required]],
      originalPrice: [null, [Validators.required]],
      price: [null, [Validators.required]],
    })
  }

}
