import { Component } from '@angular/core';
import { preserveWhitespacesDefault } from '../../node_modules/@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EverShop';

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

  totalItems() {
    /*let sum = 0;
    for (let item of this.myItems) {
      sum += item.stock;
    }
    return sum;*/
    return this.myItems.reduce( (prev, current) => prev + current.stock, 0);
  }
}


