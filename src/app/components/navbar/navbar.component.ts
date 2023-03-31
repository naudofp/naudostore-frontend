import { OrderService } from './../../services/order/order.service';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

constructor(private router:Router, private orderService: OrderService){}

  ngOnInit(): void {
  }

  getNumberItems(): string {
    let order = JSON.parse(this.orderService.getOrder());

    if(order == null) {
      return ""
    }
    
    return order.items.length;
  }

  goToCreateProduct(){
    this.router.navigate(['create-product'])
  }

  goToBadge(){
    this.router.navigate(['cart'])
  }
}
