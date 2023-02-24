import { ProductCardModel } from './../../models/product-card';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProductSavedModel } from './../../models/product';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endPoint: string = "http://localhost:8080/api/product"

  constructor(private http : HttpClient) { }

  // POST
  
  save(data : FormData): Observable<ProductSavedModel>{
    return this.http.post<ProductSavedModel>(this.endPoint, data);
  }

  // GET 
  
  getAll(): Observable<Array<ProductCardModel>> {
    return this.http.get<Array<ProductCardModel>>(this.endPoint);
  }
}
