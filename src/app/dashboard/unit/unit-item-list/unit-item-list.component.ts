import { Component, OnInit, Input } from '@angular/core';
import{ ProductService} from '../../../service/product-service/product.service';
import { Subject } from 'rxjs';

interface item{
  id:string,
  name:string,
  note:string
}

@Component({
  selector: 'app-unit-item-list',
  templateUrl: './unit-item-list.component.html',
  styleUrls: ['./unit-item-list.component.css']
})
export class UnitItemListComponent implements OnInit {
  @Input() parentSubject:Subject<any> | undefined;
  listOfProducts:any=[];
  index:number=0;
  constructor(private productService: ProductService) { }

  sortFn = (a:item, b:item) => a.name.localeCompare(b.name);

  getUnitItem(){
    this.productService.getUnitItem().subscribe(
      (result:any)=>{
        this.listOfProducts = result.results
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  updateProduct(){
    this.getUnitItem();
  }

  ngOnInit(): void {
    this.getUnitItem();
    this.parentSubject?.subscribe(event=>{
      this.getUnitItem();
    });
    this.sortData();
  }

  onPageIndexChange(data:any){
    this.index = (data-1)*10
  }

  sortData(){
    this.productService.sortUnitItem(1, 25, 'name').subscribe(
      (result)=>{
        console.log(result)
      }
    )
  }

}
