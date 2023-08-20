import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService, } from 'src/app/services/cart.service';

const ROWS_HEIGHT: {[id:number]: number} = {1: 400, 3: 335, 4: 350};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cols = 5;
  rowHeight = ROWS_HEIGHT[this.cols]
  category: string | undefined;

  //inject CartSerivice as a dependency of the component
  constructor(private cartService: CartService){}

  onShowCategory(newCategory: string): void {
    this.category = newCategory
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }

 

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
