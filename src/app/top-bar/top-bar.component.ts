import {Component, EventEmitter, Input, Output} from '@angular/core';
import Product from "../types/Product";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Input() product!: Product;
  @Output() quantityEvent = new EventEmitter<number>();
}
