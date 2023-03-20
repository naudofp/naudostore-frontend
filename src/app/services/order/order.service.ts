import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  storage =  window.localStorage; 

  constructor() {
  }

  addItem(idProduct: string, quantity: number) {

    if(localStorage.getItem('order') == null) {
      const order = {
         items: [
            {
                quantity: quantity,
                idProduct : idProduct 
            }
        ]
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
