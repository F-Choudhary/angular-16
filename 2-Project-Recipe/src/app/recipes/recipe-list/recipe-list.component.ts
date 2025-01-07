import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "Biryani",
      "this is test description",
      "https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani.jpg"
    ),
    new Recipe(
      "Paneer Tikka Masala",
      "this is test description",
      "https://healthynibblesandbits.com/wp-content/uploads/2019/07/Paneer-Tikka-Masala-FF3.jpg"
    ), 
    new Recipe(
      "Smashed Burger",
      "this is test description",
      "https://cdn.urbanpiper.com/media/bizmedia/2021/11/03/BDB_10.jpg"
    ),
  ];

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
