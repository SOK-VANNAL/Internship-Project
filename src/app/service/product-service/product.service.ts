import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getUnitItem(){
    return this.http.get('https://sale-api.sgx.bz/api/Unit?pageIndex=1&pageSize=25&sorts=&filters=');
  };

  updateUnitItem(name:string, note:string|null, id:string){
    return this.http.put('https://sale-api.sgx.bz/api/Unit/5', {id, name, note});
  };

  deleteUnititem(id:string, name:string, note:string){
    console.log(id, name, note)
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
  }
}
