import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Tshirt XYZ',
      cost: 50,
      img: 'https://picsum.photos/id/237/400/300',
      variants: ['red', 'purple', 'cyan'],
    },
    {
      id: 2,
      name: 'Pants ABC',
      cost: 30,
      img: 'https://picsum.photos/id/238/400/300',
      variants: ['red', 'lightgreen'],
    },
    {
      id: 3,
      name: 'Maglione XYZ',
      cost: 20,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
  ];

  selectedProduct: CartItem | null = null;

  cart: CartItem[] = [];

  selectVariant(product: Product, variant: string) {
    console.log(product.id, variant);
    this.selectedProduct = { product, variant };
  }

  addToCart() {
    if (this.selectedProduct) this.cart.push(this.selectedProduct);
  }

  getTotalCart() {
    return this.cart.reduce((acc: number, curr: CartItem) => {
      return acc + curr.product.cost;
    }, 0);
  }
}

interface Product {
  id: number;
  name: string;
  cost: number;
  img: string;
  variants: string[];
}

interface CartItem {
  product: Product;
  variant: string;
}
