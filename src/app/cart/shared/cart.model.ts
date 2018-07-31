import { Item } from "../../items/shared/item.model";

export class Cart {
    items: Item[];
    
    constructor() {
        this.items = [];
    }
}