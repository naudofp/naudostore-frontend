import { OrderService } from './../../../services/order/order.service';
import { ProductService } from './../../../services/product/product.service';
import { ProductCardModel } from './../../../models/product-card';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-item-badge',
  templateUrl: './card-item-badge.component.html',
  styleUrls: ['./card-item-badge.component.css']
})
export class CardItemBadgeComponent implements OnInit{

  product: ProductCardModel = new ProductCardModel();
  order = JSON.parse(this.orderService.getOrder());
  
  @Input()
  item: any;

  @Output()
  removeItem = new EventEmitter<any>();

  amount: number = 0;
  
  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private router: Router
  ){
  }
  
  ngOnInit(): void {
    this.getProduct()
    this.amount = this.item.quantity * this.product.price;
  }

  public onRemoveItem() {
    let amountItem = this.item.quantity * this.product.price;
    this.removeItem.emit({id: this.product.id, itemValue: amountItem})
  }

  productInfo(){
    this.router.navigate(['info-p/' + this.product.id]);
  }

  getProduct() {
    
    this.productService.getOne(this.item.idProduct).subscribe(data => {
        this.product = data;
      })
  }
}
