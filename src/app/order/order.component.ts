import { Component, OnInit, Inject } from '@angular/core';
import { Order } from './shared/order.model';
import { CartService } from '../cart/shared/cart.service';
import { ShippingInfo } from '../shipping-info/shared/shipping-info.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: Order;

  constructor(private cartService: CartService) {
    this.order = new Order();
    this.order.cart = this.cartService.getCart();
    this.order.shippingInfo = new ShippingInfo();
  }

  ngOnInit() {
  }

  orderSubmitted(submitted: boolean) {
    // if( submitted ){
    //   this.document.getElementById('modalOrderBtn').click();
    // }
  }

}
