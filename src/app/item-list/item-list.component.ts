import { Component, OnInit } from '@angular/core';
import { Item, Mode } from './item.model';
import { ITEMS } from './mocks';
import { ItemListService } from './item-list.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  myItems: Item[] = [];
  viewMode: Mode = Mode.View;
  editMode: Mode = Mode.Edit;
  
  constructor(private itemListService: ItemListService) { }

  ngOnInit() {
    this.itemListService.getItemList()
      .subscribe( (data: Item[]) => this.myItems = data,
                  error => console.error(error),
                  () => console.log('My item list is loaded!')
    );
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

  showEditIcon(item: Item) {
    item.icon = true;
  }

  hideEditIcon(item: Item) {
    item.icon = false;
  }

  changeMode(item: Item, mode: Mode){
    item.icon = false;
    item.mode = mode;
    if( item.mode === Mode.View ){
      this.updateItem(item);
    }
  }

  addItem(item: Item) {
    this.itemListService.addItem(item)
      .subscribe(item => this.myItems.push(item));
  }

  deleteItem(item: Item) {
    this.itemListService.deleteItem(item.id)
      .subscribe(
        data => {
          this.myItems = this.myItems.filter( el => {return el.id !== item.id} );
      });
  }

  updateItem(item: Item) {
    this.itemListService.updateItem(item).subscribe();
  }

}
