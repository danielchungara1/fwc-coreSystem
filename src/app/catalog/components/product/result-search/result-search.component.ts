import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../product.model';
import {ProductService} from '../product.service';
import {ResultSearch} from '@core/interfaces/result-search';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {OrderDirection} from '@core/interfaces/order/order-direction';
import {MenuItem} from 'primeng/api';
import {OrderCriteria} from './order-criteria';

@Component({
    selector: 'app-list',
    templateUrl: './result-search.component.html',
    styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent implements OnInit {

    products: ProductModel[];
    searchText: string;
    orderByItems: MenuItem[];
    orderBySelected: string;

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
        this.initializeItems();
    }

    initializeItems(): void {
        this.orderByItems = [
            {
                label: OrderCriteria.LOWEST_PRICE,
                command: () => this.orderByPriceASC()
            },
            {
                label: OrderCriteria.HIGHEST_PRICE,
                // icon: 'pi pi-fw pi-sign-out',
                command: () => this.orderByPriceDESC()
            },
            {
                label: OrderCriteria.MOST_RELEVANT,
                command: () => this.orderByMostRelevant()
            }
        ];

        this.orderBySelected = OrderCriteria.MOST_RELEVANT;

    }

    orderByPriceASC(): void {
        this.productService.searchAndEmit(
            this.searchText,
            0,
            undefined,
            {
                field: 'price',
                direction: OrderDirection.ASC
            }
        );
        this.orderBySelected = OrderCriteria.LOWEST_PRICE;
    }

    orderByPriceDESC(): void {
        this.productService.searchAndEmit(
            this.searchText,
            0,
            undefined,
            {
                field: 'price',
                direction: OrderDirection.DESC
            }
        );
        this.orderBySelected = OrderCriteria.HIGHEST_PRICE;
    }

    orderByMostRelevant(): void {
        this.productService.searchAndEmit(
            this.searchText,
            0,
            undefined,
            {
                field: 'description',
                direction: OrderDirection.ASC
            }
        );
        this.orderBySelected = OrderCriteria.MOST_RELEVANT;
    }

}
