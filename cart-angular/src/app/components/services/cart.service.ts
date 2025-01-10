import { Injectable } from '@angular/core';
import { CartItem, Product } from 'src/app/app.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: CartItem[] = [];

  addToCart(cartitem: CartItem) {
    if (cartitem) {
      this.items = [...this.items, cartitem];
    }
  }
}
