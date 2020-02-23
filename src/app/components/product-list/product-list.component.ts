/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../core/services/product.service';
import {Product} from '../../core/common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    );
  }

}
