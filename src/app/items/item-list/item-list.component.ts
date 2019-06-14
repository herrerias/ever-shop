import { Component, OnInit } from '@angular/core';
import { Item, Mode } from '../shared/item.model';
import { ItemService } from '../shared/item.service';
import { CartService } from '../../cart/shared/cart.service';
import { Cart } from '../../cart/shared/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  showNewItemPanel = false;
  myItems: Item[] = [];

  cart: Cart;

  constructor(private itemService: ItemService, private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.loadItems();
    this.cart = new Cart();
  }

  loadItems() {
    this.itemService.getItemList()
      .subscribe( (data: Item[]) => this.myItems = data,
                  error => console.error(error),
                  () => console.log('My item list is loaded!')
    );
  }

  totalItems() {
    return this.myItems.reduce( (prev, current) => prev + current.stock, 0);
  }

  addToCart(item: Item) {
    this.cart.items.push(item);
  }

  orderItems() {
    this.cartService.setCart(this.cart);
    this.router.navigateByUrl('/order');
  }

  addNewItem(item: Item) {
    this.itemService.addItem(item)
      .subscribe(data => this.loadItems() );
    this.showNewItemPanel = false;
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item.id)
      .subscribe(
        data => {
          this.myItems = this.myItems.filter( el => el.id !== item.id );
      });
  }

}
