import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/core/common/product-category';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  productCategories: ProductCategory[];


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProductCategories();
  }
  listProductCategories() {

    this.productService.getProductCategories().subscribe(
      data => {
        this.productCategories = data;
      }
    );
  }

}
