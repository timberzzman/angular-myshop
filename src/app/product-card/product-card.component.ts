import { Component, Input, Output, EventEmitter } from '@angular/core';
import Product from "../types/Product";
import { isInCart, setElement } from "../localStorageService";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() isHoverEvent = new EventEmitter<boolean>();

  setElementInCart(productID: number) {
    setElement(productID);
  }

  productIsInCart(productID: number) {
    return isInCart(productID);
  }

  isHover(value: boolean) {
    this.isHoverEvent.emit(value);
  }
}
