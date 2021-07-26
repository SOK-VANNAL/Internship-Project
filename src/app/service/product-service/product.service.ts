import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // getUnitItem(){
  //   return this.http.get('https://sale-api.sgx.bz/api/Unit?pageIndex=1&pageSize=25&sorts=&filters=');
  // };

  updateUnitItem(name:string, note:string|null, id:string){
    return this.http.put('https://sale-api.sgx.bz/api/Unit/5', {id, name, note});
  };

  deleteUnititem(id:string, name:string, note:string){
    const  options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id,
        name,
        note
      }
    }
    return this.http.delete(`https://sale-api.sgx.bz/api/Unit/${id}`, options);
  };

  addUnitItem(name:string, note:string){
    return this.http.post("https://sale-api.sgx.bz/api/Unit", {name, note});
  };

  getUnitItem(pageNumber:number, pageSize:number, sort:string){
    return this.http.get(`https://sale-api.sgx.bz/api/unit?pageIndex=${pageNumber}&pageSize=${pageSize}&Sorts=${sort}&filters=`);
  }

  getItemType(){
    return this.http.get('https://sale-api.sgx.bz/api/ItemType?pageIndex=1&pageSize=25&sorts=&filters=%5B%7B%22field%22:%22search%22,%22operator%22:%22contains%22,%22value%22:%22%22%7D%5D');
  }

  getUnitType(){
    return this.http.get('https://sale-api.sgx.bz/api/Unit?pageIndex=1&pageSize=25&sorts=&filters=%5B%7B%22field%22:%22search%22,%22operator%22:%22contains%22,%22value%22:%22%22%7D%5D');
  }
}
