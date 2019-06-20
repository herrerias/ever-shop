import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemService } from './items/shared/item.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/shared/cart.service';
import { OrderComponent } from './order/order.component';
import { ShippingInfoComponent } from './shipping-info/shipping-info.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { routing } from './app.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemsComponent,
    ItemComponent,
    CartComponent,
    OrderComponent,
    ShippingInfoComponent,
    ItemDetailComponent,
    PageNotFoundComponent,
    ItemEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [ItemService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
