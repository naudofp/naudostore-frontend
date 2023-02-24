import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

constructor(private router:Router){}

  ngOnInit(): void {
  }

  goToCreateProduct(){
    this.router.navigate(['create-product'])
  }

  goToBadge(){
    this.router.navigate(['cart'])
  }
}
