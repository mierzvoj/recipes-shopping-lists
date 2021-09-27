import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe 123', 'This is simply a test', 'C:\Users\mierz\OneDrive\PICTURES\gindaisy.jpg'),
    new Recipe('A test Recipe 456', 'This is simply a test', 'C:\Users\mierz\OneDrive\PICTURES\gindaisy.jpg'),

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(event: Event, recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
    console.log(this.recipes);
  }
}
