import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item, Mode } from '../shared/item.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item;

  @Output() addItem = new EventEmitter<Item>();
  @Output() close = new EventEmitter<Boolean>();

  constructor() {
    this.item = new Item();
    this.item.id = null;
  }

  ngOnInit() {
  }

  addNewItem() {
    this.item.image = `assets/${this.item.image}`;
    this.addItem.emit(this.item);
  }

  cancel() {
    this.close.emit(true);
  }
}
