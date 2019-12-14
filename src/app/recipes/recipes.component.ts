import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipes:Recipe;

  constructor() { }

  ngOnInit() {
  }
  onReached(selectedRecipe){
this.selectedRecipes=selectedRecipe;
console.log("Reached recipe component"+ this.selectedRecipes.description);

  }

}
