import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Recipe } from '../../model/recipe';
import { RecipeService } from '../../services/recipe.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;

  recipes: Recipe[];

  constructor(private route: ActivatedRoute,
    private location: Location, private recipe_service: RecipeService) {
      this.recipe_service.getAllRecipes().then((recipes) => {
        this.recipes = recipes;
      })
  }

  ngOnInit(): void {
    this.recipe = this.recipes[1];
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recipe = this.findRecipeById(parseInt(params.get('id'), 10));
    });
  }

  findRecipeById(id: number): Recipe {
    for (const recipe of this.recipes) {
      if (recipe.id === id) {
        return recipe;
      }
    }
    return null;
  }

  goBackButtonPressed(): void {
    this.location.back();
  }

}
