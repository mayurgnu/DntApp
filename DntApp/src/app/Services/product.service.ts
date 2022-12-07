import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {

   }
   getData() {
    var data = this.httpClient.get( environment.apiUrl + 'Product');
    return data;
    }
    
    postData(obj: Product) {
    return this.httpClient.post( environment.apiUrl + 'Product', obj);
    }
    
    putData(obj: Product) {
    return this.httpClient.put( environment.apiUrl + 'Product/', obj);
    }
    
    deleteData(id: number) {
    return this.httpClient.delete( environment.apiUrl + 'Product/?Productid=' + id );
    }
}
