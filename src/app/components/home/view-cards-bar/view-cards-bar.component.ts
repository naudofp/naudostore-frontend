import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-view-cards-bar',
  templateUrl: './view-cards-bar.component.html',
  styleUrls: ['./view-cards-bar.component.css']
})
export class ViewCardsBarComponent {

  @Output()
  columnUpdated = new EventEmitter<number>();

  public columnsViewUpdated(number: number){
    this.columnUpdated.emit(number);
  }
}
