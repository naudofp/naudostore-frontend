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
      key: "pk_test_51MPpLfGVkIvgjRtNVhs6B5Hg117qiOZTZU7niys8TRYcQI5sxMVgakhX9hkFw9U2JjfJNzrfGQkt9wjyMkk2FuNF00FgL6NwbU",
      locale: "auto"
    });
  }

  doPayment(){

    const amount = 10.0; // substitua pelo valor do pagamento

    this.stripeCheckoutHandler.open({
      name: 'Exemplo de pagamento com Stripe',
      description: 'Exemplo de pagamento',
      amount: amount * 100,
      token: (token: any) => {
        console.log('Token do Stripe:', token.id);
        this.service.openChekout(token.id, amount).subscribe((res: string) => {
          console.log(res)
        });
      }
    });

   
  }

}
