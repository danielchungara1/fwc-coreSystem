import {Component, OnInit} from '@angular/core';
import {responsiveOptions} from './product.responsive';
import {products} from './product.mock';
import {ProductService} from './product.service';
import {NotificationService} from '@shared/notifications/notification.service';
import {ProductModel} from './product.model';

@Component({
    selector: 'app-products',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    responsiveOptions;
    products: ProductModel[];

    constructor(public service: ProductService, public notificationService: NotificationService) {
    }

    ngOnInit(): void {
        this.responsiveOptions = responsiveOptions;
        this.service.getAll()
            .subscribe(
                data => this.products = data,
                error => this.notificationService.showError(error));
    }

}
