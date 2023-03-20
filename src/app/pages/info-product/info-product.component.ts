import { OrderService } from './../../services/order/order.service';
import { ProductService } from './../../services/product/product.service';
import { ProductCardModel } from 'src/app/models/product-card';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.css']
})
export class InfoProductComponent {

  product = new ProductCardModel();

  id = this.activatedRoute.snapshot.params['id'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private orderService: OrderService
    ){
      this.getProduct();
      localStorage.clear()
  }
  
  getProduct(){
    this.productService.getOne(this.id).subscribe((data: ProductCardModel) => { this.product = data });
  }

  addItemToCard(quantity: string){
    if(quantity.length >= 1) {
     this.orderService.addItem(this.product.id, Number.parseInt(quantity));
    } else {
      window.alert('Quantity unvalid')
    }
  }

}
