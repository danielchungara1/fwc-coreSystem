import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../product.model';

@Component({
  selector: 'app-card-product',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  product: ProductModel;

  constructor() { }

  ngOnInit(): void {
  }

}
