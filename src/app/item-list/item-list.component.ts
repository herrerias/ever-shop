import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ITEMS } from './mocks';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  myItems: Item[];
  
  constructor() { }

  ngOnInit() {
    this.myItems = ITEMS;
  }

  totalItems() {
    return this.myItems.reduce( (prev, current) => prev + current.stock, 0);
  }

  downQuantity(item: Item){
    if( item.quantity > 0 ){
      item.quantity--;
      item.stock++;
    }
  }

  upQuantity(item: Item) {
    if( item.stock > 0 ){
      item.quantity++;
      item.stock--;
    }
  }

}
