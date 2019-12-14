import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 @Output() recipeListSelected = new EventEmitter<Recipe>();

  @Output() recipes: Recipe[]=[new Recipe('Test Dish','This is a test description',
  'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/best_and_worst_indian_dishes_for_your_health_slideshow/1800ss_thinkstock_rf_red_lentil_dal.jpg?resize=650px:*'),new Recipe('Test Data 2','Test Description 2','https://akm-img-a-in.tosshub.com/indiatoday/images/story/201708/dish-story_647_081417052301.jpg')];
  
  constructor() { }

  ngOnInit() {
  }


  onrecipeSelected(recipeList:Recipe)
  {
    this.recipeListSelected.emit(recipeList);
  }
}
