import {Component, OnInit} from '@angular/core';
import {responsiveOptions} from './carousel.responsive';
import {ProductService} from '../product.service';
import {NotificationService} from '@shared/notification.service';
import {ProductModel} from '../product.model';
import {ProductEndpoints} from '../product.endpoints';

@Component({
    selector: 'app-carousel-products',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

    responsiveOptions;
    products: ProductModel[];
    productEndpoints = new ProductEndpoints();

    fetchProducts = () => this.service.getPage('', 0, 20)
        .subscribe(
            data => {
                this.products = data.content;
            },
            error => this.notificationService.showError(error))

    constructor(public service: ProductService, public notificationService: NotificationService) {

    }

    ngOnInit(): void {
        this.responsiveOptions = responsiveOptions;
        this.fetchProducts();
    }

}
