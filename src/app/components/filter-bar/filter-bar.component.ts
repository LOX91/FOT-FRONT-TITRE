import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/models/categorie';



@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css'],
})
export class FilterBarComponent {
  @Input() allCategories!: Category[];
  categorieToDisplay: number[] = [];
  @Output() categoryEnvoiParents = new EventEmitter<number[]>();

  onCheckCategory(e: any) {
    const target = e.target as HTMLInputElement;
    console.log('valeur de la checkbox:', target.value);

    if (target.checked) {
      console.log('CHECKED:', target.value);
      if (this.allCategories.length === this.categorieToDisplay.length) {

        this.categorieToDisplay = [];
        this.categorieToDisplay.push(+target.value);
      } else {
        this.categorieToDisplay.push(+target.value);
      }
    } else {
      if (this.categorieToDisplay.includes(+target.value)) {
        this.categorieToDisplay = this.categorieToDisplay.filter(
          (category_id) => category_id !== +target.value
        );
      } else {
        this.categorieToDisplay.push(+target.value);
      }
    }
    console.log('tableau de id coché ?:', this.categorieToDisplay);
    this.categoryEnvoiParents.emit(this.categorieToDisplay);
  }
}
