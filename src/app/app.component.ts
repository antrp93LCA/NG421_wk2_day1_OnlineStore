import { Component } from '@angular/core';
import { IProduct } from './models/iproduct';
import { ProductService } from './services/product.service';
import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  products: IProduct[];
  productService: ProductService;

  constructor() { }

  ngOnInit(){
    this.productService.getProducts();

  }
}


