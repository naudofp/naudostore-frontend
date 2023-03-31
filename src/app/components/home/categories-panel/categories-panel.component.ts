import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories-panel',
  templateUrl: './categories-panel.component.html',
  styleUrls: ['./categories-panel.component.css']
})
export class CategoriesPanelComponent {

  categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4']

  @Output()
  categorieUpdate = new EventEmitter<string>();
}
