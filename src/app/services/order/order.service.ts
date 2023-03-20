import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  storage =  window.localStorage; 

  constructor() {
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
}
