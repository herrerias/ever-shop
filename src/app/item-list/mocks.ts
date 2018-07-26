import { Item } from "./item.model";

export const ITEMS: Item[] = [{
    'id': 1,
    'name': 'Item name',
    'description': 'These item is the best one',
    'price': 14.99,
    'stock': 5,
    'image': '../assets/pic1.png',
    'selected': false,
    'quantity': 0,
    'mode': 1,
    'icon': false
  },
  {
    'id': 2,
    'name': 'Another Item name',
    'description': 'These item is the smallest',
    'price': 5,
    'stock': 7,
    'image': '../assets/pic2.png',
    'selected': false,
    'quantity': 0,
    'mode': 1,
    'icon': false
  },
  {
    'id': 3,
    'name': 'A cheap Item',
    'description': 'The cheapest item!',
    'price': 3.5,
    'stock': 0,
    'image': '../assets/pic3.png',
    'selected': true,
    'quantity': 0,
    'mode': 1,
    'icon': false}];

  