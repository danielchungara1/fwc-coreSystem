import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    responsiveOptions;

    products = [
        {
            description: 'Monitor Samsung 24',
            price: 25999.599,
            stock: 1,
        },
        {
            description: 'Monitor Samsung 24',
            price: 25999.599,
            stock: 1,
        },
        {
            description: 'Monitor Samsung 24',
            price: 25999.599,
            stock: 1,
        },
        {
            description: 'Monitor Samsung 24',
            price: 25999.599,
            stock: 1,
        },
        {
            description: 'Monitor Samsung 24',
            price: 25999.599,
            stock: 1,
        }
    ];

    constructor() {
        this.responsiveOptions = [
            {
                breakpoint: '5048px',
                numVisible: 4,
                numScroll: 4
            },
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    ngOnInit(): void {
    }

}
