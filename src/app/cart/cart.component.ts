import {Component, OnInit} from '@angular/core';
import {products} from "../products";
import {getCart, updateCart} from "../localStorageService";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  ngOnInit(): void {
    this.initPrice();
  }
  products = products;
  cart: any[] = getCart();
  cartTotal = 0;
  pricing = {};

  getProduct(productID: number) {
    const result = products.find(product => product.id === productID);
    if (result) {
      return result;
    }
    return {
      id: -1, name: "", picture: "", specifications: {
        color: '',
        weight: '',
        storage: '',
        price: ''
    }};
  }

  setQuantity(productID: number, quantity: number) {
    if(quantity === 0) {
      this.cart = this.cart.filter(product => product.id !== productID);
    } else {
      this.cart.forEach((product, index) => {
        if(product.id === productID) {
          this.cart[index].quantity = quantity;
        }
      });
    }

    updateCart(this.cart);
  }

  setPrice(productID: number, price: any) {
    this.pricing = {...this.pricing, [productID]: price};

    let result = 0;
    Object.values(this.pricing).forEach(price => {
      result += parseInt(<string>price);
    });

    this.cartTotal = result;
  }

  initPrice() {
    let result = 0;
    this.cart.forEach((product) => {
      const productData = this.products.find(element => element.id === product.id);
      if(productData) {
        result += product.quantity * parseInt(productData.specifications.price.replace(/\D/g, ""))
      }
    });
    this.cartTotal = result;
  }
}
