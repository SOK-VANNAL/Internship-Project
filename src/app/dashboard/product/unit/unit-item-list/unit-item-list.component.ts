import { Component, OnInit, Input } from '@angular/core';
import{ ProductService} from '../../../../service/product-service/product.service';
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
  param:any={};
  order:number=0;
  loading = true;
  sort:string = "";
  constructor(private productService: ProductService) { }

  sortData(sort:any){
    if(sort == "ascend"){
      this.sort = 'name'
    }
    else if(sort == "descend"){
      this.sort = 'name-'
    }
    else{
      this.sort =''
    }

    this.getUnitItem(1,10);
  }

  // sortFn = (a:item, b:item) => a.name.localeCompare(b.name);

  // getUnitItem(){
  //   this.productService.getUnitItem().subscribe(
  //     (result:any)=>{
  //       this.listOfProducts = result.results
  //     },
  //     (err)=>{
  //       console.log(err)
  //     }
  //   )
  // }

  updateProduct(){
    this.getUnitItem(1, 10);
    this.order = 0
  }

  ngOnInit(): void {
    // this.getUnitItem();
    this.getUnitItem(1, 10);
    this.parentSubject?.subscribe(event=>{
      this.getUnitItem(1, 10);
      this.order = 0
    });
    
  }

  onPageIndexChange(pageIndex:any){
    this.order = (pageIndex-1)*10
    this.param.pageIndex = pageIndex;
    this.getUnitItem(this.param.pageIndex, 10);
  }

  getUnitItem(pageIndex:number, pageSize:number){
    this.loading = true
    this.sort ? this.sort : ''
    this.productService.getUnitItem(pageIndex, pageSize, this.sort).subscribe(
      (result:any)=>{
        this.listOfProducts = result.results;
        this.param = result.param
        // console.log(this.param)
        this.loading = false;
      },
      (err)=>{
        console.log(err)
      }
    )
  }

}
