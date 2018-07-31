import { Injectable } from '@angular/core';
import { Item } from '../../items/shared/item.model';
import { Cart } from './cart.model';

@Injectable()
export class CartService {
  private cart: Cart;

  constructor() { }

  getCart(): Cart {
    return this.cart;
  }

  setCart(cart: Cart) {
    this.cart = cart;
  }
}
