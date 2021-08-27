import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../product.model';
import {ProductService} from '../product.service';
import {ResultSearch} from '@core/interfaces/result-search';

@Component({
    selector: 'app-list',
    templateUrl: './result-search.component.html',
    styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent implements OnInit {

    constructor(public productService: ProductService) {
    }

    model: ProductModel[];

    ngOnInit(): void {
        this.productService.$resultSearch.subscribe(
            (resultSearch: ResultSearch<ProductModel>) => {
                this.model = resultSearch.page.content;
            }
        );
    }

}
