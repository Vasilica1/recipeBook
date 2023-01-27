import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("a test recipe", "this is just a test", "https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/master/pass/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg"),
    new Recipe("clatite", "cu dulceata si nutella", "https://savoriurbane.com/wp-content/uploads/2019/10/Cl%C4%83tite-pufoase-%C8%99i-fragede-cea-mai-simpl%C4%83-re%C8%9Bet%C4%83-care-nu-d%C4%83-gre%C8%99-savori-urbane.jpg")
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  onRecipeSelected(recipeItem: Recipe) {
    this.recipeWasSelected.emit(recipeItem);
  }

}
