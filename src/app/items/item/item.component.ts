import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mode, Item } from '../shared/item.model';
import { ItemService } from '../shared/item.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Output() delete: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() addCart: EventEmitter<boolean> = new EventEmitter<boolean>();

  viewMode: Mode = Mode.View;
  editMode: Mode = Mode.Edit;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.item.mode = this.viewMode;
    this.item.selected = false;
    this.item.icon = false;
    this.item.quantity = 0;
  }

  downQuantity() {
    if ( this.item.quantity > 0 ) {
      this.item.quantity--;
      this.item.stock++;
    }
  }

  upQuantity(item: Item) {
    if ( this.item.stock > 0 ) {
      this.item.quantity++;
      this.item.stock--;
    }
  }

  showEditIcon(item: Item) {
    this.item.icon = true;
  }

  hideEditIcon(item: Item) {
    this.item.icon = false;
  }

  changeMode(item: Item, mode: Mode) {
    this.item.icon = false;
    this.item.mode = mode;
    if ( this.item.mode === Mode.View ) {
      this.updateItem();
    }
  }

  updateItem() {
    this.itemService.updateItem(this.item).subscribe();
  }

  addToCart() {
    this.addCart.emit(true);
  }

  emitDelete() {
    this.delete.emit(true);
  }

}
