import { environment } from './../../../environments/environment';
import { StripeService } from '../../services/payment/stripe.service';
import { Component } from '@angular/core';

declare var StripeCheckout: any;

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {

  private stripeCheckoutHandler: any;

  constructor(private service: StripeService){
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
