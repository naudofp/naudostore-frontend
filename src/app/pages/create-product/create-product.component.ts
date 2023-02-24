import { ProductService } from './../../services/product/product.service';
import { Product } from './../../models/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  imageBytes: any = null; 
  product: Product = new Product();

  constructor(private productService: ProductService){

  }

  onFileSelected(file: any){
    this.imageBytes = file.target.files[0];
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.imageBytes)
    formData.append('product', new Blob([JSON.stringify(this.product)], {type: 'application/json'}));
    
    this.productService.save(formData).subscribe((data) => {console.log(data)})
  }


}
