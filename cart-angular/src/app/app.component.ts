import { Component, effect, inject, signal } from '@angular/core';
import { CartService } from './components/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cartService = inject(CartService);

  getTotalItemsInCart = signal(0);
  qyEffect = effect(() =>
    console.log('last value : ', this.getTotalItemsInCart())
  );

  productSSignal = signal<Product[]>([
    {
      id: 1,
      name: 'Tshirt XYZ',
      cost: 50,
      oldCost: 100,
      img: 'https://picsum.photos/id/237/400/300',
      variants: ['red', 'purple', 'cyan'],
    },
    {
      id: 2,
      name: 'Pants ABC',
      cost: 30,
      oldCost: 130,
      img: 'https://picsum.photos/id/238/400/300',
      variants: ['red', 'lightgreen'],
    },
    {
      id: 3,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 4,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 5,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 6,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 7,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 8,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 9,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 10,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
  ]);
  products: Product[] = [
    {
      id: 1,
      name: 'Tshirt XYZ',
      cost: 50,
      oldCost: 100,
      img: 'https://picsum.photos/id/237/400/300',
      variants: ['red', 'purple', 'cyan'],
    },
    {
      id: 2,
      name: 'Pants ABC',
      cost: 30,
      oldCost: 130,
      img: 'https://picsum.photos/id/238/400/300',
      variants: ['red', 'lightgreen'],
    },
    {
      id: 3,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 4,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 5,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 6,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 7,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 8,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 9,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 10,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
  ];

  selectedProduct: CartItem | null = null;
  selectedProductSignal = signal<CartItem | null>(null);

  cart: CartItem[] = [];

  selectVariant(product: Product, variant: string) {
    this.selectedProduct = { product, variant };
  }

  addToCart() {
    if (this.selectedProduct) {
      this.cartService.addToCart(this.selectedProduct);
    }
  }

  getTotalCart() {
    return this.cart.reduce((acc: number, curr: CartItem) => {
      return acc + curr.product.cost;
    }, 0);
  }
}

export interface Product {
  id: number;
  name: string;
  cost: number;
  oldCost: number;
  img: string;
  variants: string[];
}

export interface CartItem {
  product: Product;
  variant: string;
}
