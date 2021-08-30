import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocalStorageService} from '@core/services/localStorage/local-storage.service';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import {NotificationService} from '@shared/notification.service';
import {ProductService} from '../product/product.service';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  items: MenuItem[];
  ref: DynamicDialogRef;

  constructor(private localStorageService: LocalStorageService,
              private router: Router,
              private notificationService: NotificationService,
              public productService: ProductService,
              public dialogService: DialogService
              ) {
  }

  ngOnInit(): void {

    this.initializeMenuItems();

  }

  show(): void{
    this.ref = this.dialogService.open(LoginComponent, {
      header: 'Login',
      contentStyle: {'max-height': '500px', overflow: 'auto'},
      baseZIndex: 10000
    });

    // this.ref.onClose.subscribe((product: Product) => {
    //   if (product) {
    //     this.messageService.add({severity: 'info', summary: 'Product Selected', detail: product.name});
    //   }
    // });
  }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }

  initializeMenuItems(): void{
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
      },
      {
        label: 'MY ACCOUNT',
        items: [
          {
            label: 'LOGIN',
            command: () => this.show()
          }
        ]
      }
    ];
  }

}
