import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe("clatite", "cele mai bune", "https://www.lauralaurentiu.ro/wp-content/uploads/2013/03/clatite-simple-reteta-laura-laurentiu-reteta-de-clatite-simple-reteta-simpla-clatite-reteta-aluat-de-clatite.jpg"),
    new Recipe("apples", "cele mai bune", "https://parade.com/.image/t_share/MTkwNTgxNDY1MzcxMTkxMTY0/different-types-of-apples-jpg.jpg")
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit() {
    this.recipes.forEach(element => console.log(element?.name));
  }
}
