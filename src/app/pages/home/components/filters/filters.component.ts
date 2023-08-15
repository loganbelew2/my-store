import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
 categories = ['shoes','sports'];
 
 @Output()
 showCategory = new EventEmitter<string>();


 onCategorySelect(category: string): void {
  this.showCategory.emit(category)
 }
}
