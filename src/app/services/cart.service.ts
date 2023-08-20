import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

//decorator allows class to be provided to other parts: single instance of class is shared through root level.
@Injectable({
  providedIn: 'root'
})
export class CartService {

  //property that is meant to hold cart data, initialized with empty array of items, and emits current value when subscribed to.
  cart = new BehaviorSubject<Cart>({items: []})

  //injects MatSnackBar service as dependency
  constructor(private _snackBar: MatSnackBar) { }

  //method that creates copy of cart, checks if item already in cart, then increments quantity if so, else it adds item to items
  // then it emits new values to subscriber using next method and makes pop up
  addToCart(item: CartItem): void {
      const items = [...this.cart.value.items];

      const itemInCart = items.find((_item) => _item.id == item.id);
      if(itemInCart) {
        itemInCart.quantity += 1;
      } 
      else {
        items.push(item)
      }

      this.cart.next({ items: items })
      this._snackBar.open('1 item added to cart.', 'Ok', {duration: 3000});
    }
  
    //method takes items and maps through each one, multiplies the price times quantity for item, then adds it to the total
  getTotal(items: Array<CartItem>): number {
      return items. 
       map(item => item.price * item.quantity)
         .reduce((prev, current) => prev + current, 0)
   }

   //method returns void and emits empty array to cart behavior subject and displays message
  clearCart(): void {
    this.cart.next({items: []});
    this._snackBar.open("cart has been cleared", 'OK', {
      duration: 3000
    })
  }
}
