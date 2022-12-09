import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products = products;
  isHover = false;

  setHover(newValue: boolean) {
    this.isHover = newValue;
  }
}
