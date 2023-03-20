import { OrderService } from './../../services/order/order.service';
import { ProductService } from './../../services/product/product.service';
import { Component } from '@angular/core';
import { ProductCardModel } from 'src/app/models/product-card';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  products: Array<ProductCardModel> = new Array();
  sizeCard: number = 3;

  constructor(private service: ProductService){
    this.service.getAll().subscribe((data: Array<ProductCardModel>) => this.products = data)
  }

  public updateModeView(number: number){
    this.sizeCard = number;
  }
}
