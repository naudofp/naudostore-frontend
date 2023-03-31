import { Router } from '@angular/router';
import { ProductCardModel } from './../../../models/product-card';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  
  constructor(private route: Router){}

  @Input()
  product = new ProductCardModel();

  getProduct(){
    this.route.navigate(['info-p/', this.product.id]);
  }
}
