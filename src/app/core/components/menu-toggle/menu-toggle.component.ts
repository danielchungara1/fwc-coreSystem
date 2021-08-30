import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.scss']
})
export class MenuToggleComponent implements OnInit {

  @Input()
  items: MenuItem[];

  @Input()
  icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
