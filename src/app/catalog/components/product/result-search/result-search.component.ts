import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../product.model';
import {ProductService} from '../product.service';
import {ResultSearch} from '@core/interfaces/result-search';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: './result-search.component.html',
    styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent implements OnInit {

    products: ProductModel[];
    searchText: string;

    constructor(public productService: ProductService,
                private activatedRoute: ActivatedRoute
    ) {

        this.searchText = this.activatedRoute.snapshot.queryParamMap.get('text');
        this.products = history.state.data;

        if (!this.products) {
            this.productService.searchAndEmit(this.searchText, 0);
        }

    }

    ngOnInit(): void {
        this.productService.$resultSearch.subscribe(
            (resultSearch: ResultSearch<ProductModel>) => {
                this.products = resultSearch.page.content;
                this.searchText = resultSearch.searchText;
            }
        );
    }

}
