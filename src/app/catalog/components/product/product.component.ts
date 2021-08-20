import {Component, OnInit} from '@angular/core';
import {responsiveOptions} from './product.responsive';
import {products} from './product.mock';

@Component({
    selector: 'app-products',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    responsiveOptions;
    products;

    constructor() {
        this.responsiveOptions = responsiveOptions;
        this.products = products;
    }

    ngOnInit(): void {
    }

}
