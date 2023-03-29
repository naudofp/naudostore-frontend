import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  endPoint: string = "http://localhost:8080/api/payment"

  constructor(private http: HttpClient) { }

  openChekout(token: any, amount: any, orderId: string): Observable<string>{
    const params = new HttpParams()
      .set('stripeToken', token)
      .set('amount', amount)
      .set('orderId', orderId);
    return this.http.post<string>(this.endPoint + "/charge", null, {params: params});
  }
}
