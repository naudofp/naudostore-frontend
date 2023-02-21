import { StripeService } from './../../services/stripe.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  sizeCard:number = 4;

  constructor(){}

  public updateModeView(number: number){
    this.sizeCard = number;
  }
}
