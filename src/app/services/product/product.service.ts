import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from './../../models/product';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endPoint: string = "http://localhost:8080/api/product"

  constructor(private http : HttpClient) { }

  // POST
  
  save(data : FormData): Observable<Product>{
    return this.http.post<Product>(this.endPoint, data);
  }
}
