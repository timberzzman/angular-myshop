import {
  Component,
  EventEmitter,
  Input, OnInit,
  Output
} from '@angular/core';
import Product from "../types/Product";

@Component({
  selector: 'tr[app-cart-product]',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  @Input() product!: Product;
  @Input() quantity!: number;

  @Output() quantityEvent = new EventEmitter<number>();
  @Output() priceEvent = new EventEmitter<number>();

  totalPrice = 0;
  getTotalPrice() {
    this.totalPrice =  this.quantity * parseInt(this.product.specifications.price.replace(/\D/g, ""));
  }

  updateQuantity(newValue: number) {
    this.quantity = newValue;
    this.getTotalPrice();
    this.quantityEvent.emit(newValue);
    this.priceEvent.emit(this.totalPrice);
  }

  ngOnInit(): void {
    this.getTotalPrice();
  }
}
