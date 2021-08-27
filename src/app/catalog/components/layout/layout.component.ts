import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product/product.service';
import {ResultSearch} from '@core/interfaces/result-search';
import {ProductModel} from '../product/product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.$resultSearch.subscribe((resultSearch: ResultSearch<ProductModel>) => {
      this.router.navigate(['catalog/result-search']);
    });
  }

}
