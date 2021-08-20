import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '@core/localStorage/local-storage.service';
import {Router} from '@angular/router';
import {NotificationService} from '@shared/notifications/notification.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  constructor(private localStorageService: LocalStorageService,
              private router: Router,
              private notificationService: NotificationService) {
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
