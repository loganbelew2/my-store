import { Component } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss']
})
export class ProductsHeaderComponent {
  sort = 'desc';
  itemsShowCount = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort
  }

  OnItemsUpdated(count: number): void {
    this.itemsShowCount = count
  }
}
