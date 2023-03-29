import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  storage =  window.localStorage; 
  baseurl = "http://localhost:8080/api/order"

  constructor(private http: HttpClient) {
  }

  addItem(idProduct: string, quantity: number, price: number) {

    if(localStorage.getItem('order') == null) {
      const order = {
         items: [
            {
                quantity: quantity,
                idProduct : idProduct 
            }
        ],
          amount: price * quantity
      }

      localStorage.setItem('order', JSON.stringify(order))
      return JSON.parse(this.getOrder());
    } else {
      const newItem = 
        {
          quantity: quantity,
          idProduct: idProduct
        }

      let order = JSON.parse(this.getOrder());
      order.amount += price * quantity; 
      order.items.push(newItem);

      localStorage.setItem('order', JSON.stringify(order))
      return JSON.parse(this.getOrder());
    }
  }

  getOrder() : any{
    let order = localStorage.getItem('order');
    return order;
  }

  // API/POST

  public createOrder(order: any): Observable<any>{
    return this.http.post<any>(this.baseurl, order)
  }


  removeItem(item: any) {
    let order = JSON.parse(this.getOrder());
  
    for(var i = 0; i <= order.items.length; i++){

      if(order.items[i].idProduct == item.id) {
        order.items.splice(i, 1)
        order.amount -= item.itemValue;
        break;
      }
    }

    console.log(order.items);
    
    localStorage.setItem('order', JSON.stringify(order));
  }
}
