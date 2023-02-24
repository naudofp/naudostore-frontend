import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories-panel',
  templateUrl: './categories-panel.component.html',
  styleUrls: ['./categories-panel.component.css']
})
export class CategoriesPanelComponent {

  categories = ['Pens', 'Books', 'Erasers', 'Pencil Case']

  @Output()
  categorieUpdate = new EventEmitter<string>();

  onChangeCategory(s: string){
    this.categorieUpdate.emit(s);
  }

  isLastOrFirstItem(item: string): string{
    if(item == this.categories[0])
      return "rounded-for-first"
    else if (item == this.categories[this.categories.length -1])
      return "rounded-for-last";

      return '';
  }
}
