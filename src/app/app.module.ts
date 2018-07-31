import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemService } from './items/shared/item.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/shared/cart.service';
import { OrderComponent } from './order/order.component';
import { ShippingInfoComponent } from './shipping-info/shipping-info.component';

const routes: Routes = [
    { path: '', component: ItemsComponent },
    { path: 'home', component: ItemsComponent },
    { path: 'order', component: OrderComponent }
  ];
  

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemsComponent,
    ItemComponent,
    CartComponent,
    OrderComponent,
    ShippingInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ItemService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
