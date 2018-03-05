import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  current_classes: any;

  current_styles: any;

  recipes: Recipe[];


  constructor(private router: Router,
    private recipe_service: RecipeService
  ) {

    this.current_classes = { 'darkbg': true };
    this.current_styles = { 'font-size': '150%', 'color': 'red' };
    this.recipe_service.getAllRecipes().then((recipe_from_service) => {
      this.recipes = recipe_from_service;
    });

  }

  userClickedOnRecipe(recipe_id): void {
    this.router.navigateByUrl('/recipe/' + recipe_id);
  }

  addNewRecipePressed() {
    this.router.navigateByUrl('/edit');
  }
}
