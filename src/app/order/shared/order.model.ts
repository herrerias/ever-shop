import { ShippingInfo } from "../../shipping-info/shared/shipping-info.model";
import { Cart } from "../../cart/shared/cart.model";

export class Order {
    cart: Cart;
    shippingInfo: ShippingInfo;

    constructor(){
        
    }
}