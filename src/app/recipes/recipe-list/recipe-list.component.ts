import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrl: "./recipe-list.component.css",
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      "Biryani",
      "this is test description",
      "https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani.jpg"
    ),
    new Recipe(
      "Crispy Chicken",
      "this is test description",
      "https://i.ytimg.com/vi/3CVDrAkhDmI/maxresdefault.jpg"
    ), 
    new Recipe(
      "Smashed Chicken Burger",
      "this is test description",
      "https://cdn.urbanpiper.com/media/bizmedia/2021/11/03/BDB_10.jpg"
    ),
  ];
}
