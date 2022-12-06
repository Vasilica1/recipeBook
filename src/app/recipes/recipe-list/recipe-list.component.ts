import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("clatite", "cele mai bune", "https://www.lauralaurentiu.ro/wp-content/uploads/2013/03/clatite-simple-reteta-laura-laurentiu-reteta-de-clatite-simple-reteta-simpla-clatite-reteta-aluat-de-clatite.jpg")
  ];


}
