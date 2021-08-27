import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '@core/services/localStorage/local-storage.service';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import {NotificationService} from '@shared/notification.service';
import {ProductService} from '../product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  constructor(private localStorageService: LocalStorageService,
              private router: Router,
              private notificationService: NotificationService,
              public productService: ProductService) {
  }

  ngOnInit(): void {

    this.items = [
      {
        label: 'CATEGORIES',
        // icon: 'pi pi-fw pi-pencil',
        // routerLink: ['edit-user', this.user?.id]
      },
      {
        label: 'MAKE YOUR PC',
        // icon: 'pi pi-fw pi-sign-out',
        // command: () => this.logout()
      },
      {
        label: 'DESKTOP PCS'
      },
      {
        label: 'ACCOUNT'
      },
      {
        label: 'SHOPPING CART'
      }
    ];
  }
}
