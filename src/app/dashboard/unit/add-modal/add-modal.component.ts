import { Component, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/service/product-service/product.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html'
})
export class AddModalComponent {
  @Output() productAdded = new EventEmitter<any>()
  isVisible = false;
  isOkLoading = false;
  name:string="";
  note:string=""

  constructor(private productService: ProductService){

  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;

    this.productService.addUnitItem(this.name, this.note).subscribe(
      (result)=>{
        this.isVisible = false;
        this.isOkLoading = false;
        this.name="";
        this.note="";
        this.productAdded.emit();
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
