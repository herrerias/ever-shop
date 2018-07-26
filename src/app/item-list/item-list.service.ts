import { Item } from "./item.model";
import { ITEMS } from "./mocks";
import { Injectable } from "@angular/core";


@Injectable()
export class ItemListService {
    getItemList(): Item[] {
        return ITEMS;
    }
}