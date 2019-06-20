import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { OrderComponent } from './order/order.component';
import { ModuleWithProviders } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ItemsComponent },
    { path: 'item/:id', component: ItemEditComponent },
    { path: 'order', component: OrderComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
