import { CardItemBadgeComponent } from './../../components/badge/card-item-badge/card-item-badge.component';
import { ProductCardModel } from './../../models/product-card';
import { ProductService } from './../../services/product/product.service';
import { OrderService } from './../../services/order/order.service';
import { environment } from './../../../environments/environment';
import { StripeService } from '../../services/payment/stripe.service';
import { Component, Output } from '@angular/core';
import { OrderInfo } from '../../models/order-info';

declare var StripeCheckout: any;

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {

  private stripeCheckoutHandler: any;
  order: any = JSON.parse(this.orderService.getOrder());

  constructor(
    private service: StripeService,
    private orderService: OrderService,
  ){
    this.stripeCheckoutHandler = StripeCheckout.configure({
      key: environment.stripeKey,
      locale: "auto"
    });
  }

  doPayment(){
    const amount = 10; //TODO

    this.stripeCheckoutHandler.open({
      name: '', //TODO
      description: 'Exemplo de pagamento', //TODO
      amount: amount * 100, //TODO
      token: (token: any) => {
        console.log('Token do Stripe: ', token.id);
        this.service.openChekout(token.id, amount).subscribe((res: string) => {
          console.log(res)
        });
      }
    });
  }


  
}
