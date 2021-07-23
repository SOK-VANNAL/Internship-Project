import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product-service/product.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html'
})
export class EditModalComponent implements OnInit {
  @Input() item:any;
  @Output() productUpdated = new EventEmitter<string>();
  isVisible = false;
  isOkLoading = false;
  name:string="";
  note:string="";

  constructor(private productService: ProductService){

  }
  ngOnInit(){
    this.name = this.item.name
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    this.productService.updateUnitItem(this.name, this.note, this.item.id).subscribe(
      (result)=>{
        this.isVisible = false;
        this.isOkLoading = false;
        this.productUpdated.emit();
        this.name="";
        this.note="";
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
