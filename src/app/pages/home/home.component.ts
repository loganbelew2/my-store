import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cols = 5;

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum
  }
}
