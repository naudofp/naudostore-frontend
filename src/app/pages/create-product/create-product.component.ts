import { Router } from '@angular/router';
import { ProductService } from './../../services/product/product.service';
import { ProductSavedModel } from './../../models/product';
import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  providers: [CurrencyPipe]
})
export class CreateProductComponent {

  imageBytes: any = null; 
  product: ProductSavedModel = new ProductSavedModel();
  errorMessage = false;

  constructor(
    private productService: ProductService,
    private router: Router
    ){
  }

  onFileSelected(file: any){
    this.imageBytes = file.target.files[0];
  }

  onSubmit(){
    if(this.confirmForm()){
      const formData = new FormData();
      formData.append('file', this.imageBytes)
      formData.append('product', new Blob([JSON.stringify(this.product)], {type: 'application/json'}));
      
      this.productService.save(formData).subscribe(() => {
        this.router.navigate(['']);
      })
    } else
      this.errorMessage = true;
    
  }

  confirmForm(): boolean{
    if(this.imageBytes == null || this.product.name == "")
      return false;
    else 
     return true;
  }

}
