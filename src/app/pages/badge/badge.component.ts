import { Router } from '@angular/router';
import { OrderService } from './../../services/order/order.service';
import { environment } from './../../../environments/environment';
import { StripeService } from '../../services/payment/stripe.service';
import { Component } from '@angular/core';
import { switchMap } from 'rxjs';

declare var StripeCheckout: any;

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {

  private stripeCheckoutHandler: any;
  orderStorage: any = JSON.parse(this.orderService.getOrder());

  constructor(
    private service: StripeService,
    private orderService: OrderService,
    private stripeService: StripeService,
    private router: Router
  ){
    this.stripeCheckoutHandler = StripeCheckout.configure({
      key: environment.stripeKey,
      locale: "auto"
    });
  }

  removeItem(product : any) {
    this.orderService.removeItem(product);
    location.reload()
  }

  discart(){
    localStorage.clear()
    this.router.navigate(['']);
  }

  public createOrder(){
    let idOrder: string;
    
    this.orderService.createOrder(this.orderStorage)
    .pipe(
      switchMap(result => {
        result = idOrder = result.id;
        console.log(result);

        return this.stripeCheckoutHandler.open({
          name: '', //TODO
          description: 'Exemplo de pagamento', //TODO
          amount: this.orderStorage.amount * 100, //TODO
          token: (token: any) => {
            console.log("Stripe Token: " + token);
            
            this.service.openChekout(token.id, this.orderStorage.amount, idOrder).subscribe(res => console.log(res));
          }
        });
      }))
      .subscribe(res => {
        console.log(res)
      });
  }
}
