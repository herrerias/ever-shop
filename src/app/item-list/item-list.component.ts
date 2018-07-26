import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ITEMS } from './mocks';
import { ItemListService } from './item-list.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  myItems: Item[];
  
  constructor(private itemListService: ItemListService) { }

  ngOnInit() {
    this.myItems = this.itemListService.getItemList();
  }

  totalItems() {
    return this.myItems.reduce( (prev, current) => prev + current.stock, 0);
  }

  downQuantity(item: Item) {
    if( item.quantity > 0 ) {
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

  myFunction(item: Item) {
    if( item.quantity >= 0 ) {
      if( item.quantity >= item.stock ) {
        item.quantity = item.stock;
        item.stock = 0;
      } else {
        item.stock -= item.quantity;
      }
    }
  }

}
