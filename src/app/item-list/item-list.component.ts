import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  
  myItems = [{
    'id': 1,
    'name': 'Item name',
    'description': 'These item is the best one',
    'price': 14.99,
    'stock': 5
  },
  {
    'id': 2,
    'name': 'Another Item name',
    'description': 'These item is the smallest',
    'price': 5,
    'stock': 7
  },
  {
    'id': 3,
    'name': 'A cheap Item',
    'description': 'The cheapest item!',
    'price': 3.5,
    'stock': 0}];

  constructor() { }

  ngOnInit() {
  }

  totalItems() {
    /*let sum = 0;
    for (let item of this.myItems) {
      sum += item.stock;
    }
    return sum;*/
    return this.myItems.reduce( (prev, current) => prev + current.stock, 0);
  }

}
