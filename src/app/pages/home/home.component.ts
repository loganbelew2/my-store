import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT: {[id:number]: number} = {1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  cols = 5;
  rowHeight = ROWS_HEIGHT[this.cols]
  category: string | undefined;

  constructor(private cartService: CartService)

  ngOnInit(): void {
}
  onShowCategory(newCategory: string): void {
    this.category = newCategory
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onAddToCart(): void {

  }

}
