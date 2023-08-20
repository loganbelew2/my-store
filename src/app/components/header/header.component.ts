import { Component, Input, OnInit, } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  
  
  //_cart is exclusive to this header component
  private _cart: Cart = { items: []};
  
  itemsQuantity = 0;

  // decorator marks cart property as a input property; parent component can pass data to it.
  @Input()
  get cart(): Cart {
    return this._cart
  }

  /*setter function for cart property to set the cart and is invoked when the cart input is updated,
  map each quantity on item in cart and add current item quantity to total to get the sum, initial value is 0 */
  //SETS CART PROPERTY TO THE VALUE PASSED IN AS ARGUMENT, THEN SETS ITEMSQUANTITY TO TOTAL QUANTITY
  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsQuantity = cart.items
    .map((item) => item.quantity)
    .reduce((prev, current) => prev + current , 0);
  }

  //injects CartService into the component allowing use of the methods and functionality
  constructor(private cartService: CartService) {}

  //method delegates the calculating of total price to the cartService
  //RETURNS A NUMBER REPRESENTING THE TOTAL CART PRICE
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items)
    }

  onClearCart(){
    this.cartService.clearCart()
  }



}
