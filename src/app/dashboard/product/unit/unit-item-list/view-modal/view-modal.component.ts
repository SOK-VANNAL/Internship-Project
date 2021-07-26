import { Component, Input, TemplateRef, ViewContainerRef, Output, EventEmitter, OnInit  } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ProductService } from 'src/app/service/product-service/product.service';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html'
})
export class ViewModalComponent implements OnInit{
  @Input() item:any;
  @Output() productUpdated = new EventEmitter<any>();
  name:string ="";
  note:string="";
  deleteName:string = "";
  deleteNote:string = "";
  tplModalButtonLoading = false;
  isEdit = false;
  isDelete = false;
  
  
  constructor(private modal: NzModalService, private viewContainerRef: ViewContainerRef, private productService: ProductService) {}
  ngOnInit() {
    const name = this.item.name
    const note = this.item.note
    this.name = name;
    this.deleteName = name;
    this.note = note;
  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.modal.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        value: 'Template Context'
      },
      nzOnOk: () => console.log('Click ok')
    });
  }

  destroyTplModal(modelRef: NzModalRef): void {
    this.tplModalButtonLoading = true;
    console.log(this.name, this.note, this.deleteName, this.deleteNote)
    setTimeout(() => {
      this.tplModalButtonLoading = false;
      modelRef.destroy();
    }, 1000);
  }

  onChangeEditStatus(){
    this.isDelete = false;
    this.isEdit = !this.isEdit;
  }

  onChangeDeleteStatus(){
    this.isEdit = false;
    this.isDelete = !this.isDelete
  }

  onDelete(modelRef: NzModalRef): void {
    this.tplModalButtonLoading = true;
    this.productService.deleteUnititem(this.item.id, this.deleteName,this.deleteNote).subscribe(
      (result)=>{
        this.productUpdated.emit()
        this.tplModalButtonLoading = false;
        modelRef.destroy();
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  onEdit(modelRef: NzModalRef): void {
    this.tplModalButtonLoading = true;
    this.productService.updateUnitItem(this.name, this.note, this.item.id).subscribe(
      (result)=>{
        this.productUpdated.emit()
        this.tplModalButtonLoading = false;
        modelRef.destroy();
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  onCancel(modelRef: NzModalRef): void {
    const name = this.item.name
    const note = this.item.note
    this.name = name;
    this.deleteName = name;
    this.note = note;
    this.deleteNote="";
    this.tplModalButtonLoading = false;
    this.isEdit = false;
    this.isDelete = false;
    modelRef.destroy();
  }
}
