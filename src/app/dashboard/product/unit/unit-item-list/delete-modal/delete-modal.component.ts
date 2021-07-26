import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/service/product-service/product.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html'
})
export class DeleteModalComponent {
  @Input() item:any;
  @Output() productDeleted = new EventEmitter<any>()
  isVisible = false;
  isOkLoading = false;
  note:string='';
  constructor( private productService: ProductService){

  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    this.productService.deleteUnititem(this.item.id, this.item.name, this.note).subscribe(
      (result)=>{
        this.isVisible = false;
        this.isOkLoading = false;
        this.note="";
        this.productDeleted.emit();
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
