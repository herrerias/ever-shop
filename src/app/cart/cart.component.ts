import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './shared/cart.service';
import { Cart } from './shared/cart.model';
import { Item } from '../items/shared/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart: Cart;
  @Input() onlyRead: boolean = true;

  constructor() {
    
  }

  ngOnInit() {
  }

  remove(item: Item) {
    this.cart.items = this.cart.items.filter( el => {return el.id !== item.id} );
  }

  getTotalAmount(): number {
    return this.cart.items.reduce( (prev, current) => prev + (current.price*current.quantity), 0);
  }
}
