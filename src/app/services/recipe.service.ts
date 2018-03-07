import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Recipe } from '../model/recipe';
import 'rxjs/add/operator/toPromise';

const RECIPE_SERVER = 'http://localhost:8080';

@Injectable()
export class RecipeService {

  recipes: Recipe[];
  constructor(private http: Http) {
    // this.recipes = recipeData;
  }


  getAllRecipes(): Promise<Recipe[]> {
    return this.http
      .get(RECIPE_SERVER + '/v1/recipes.json')
      .toPromise()
      .then(response => response.json().data as Recipe[])
      .catch(this.handleError);
  }

  addnewRecepie(recipe: Recipe): Promise<Recipe> {
    return this.http
      .put(RECIPE_SERVER + '/v1/recipes.json', recipe)
      .toPromise()
      .then(response => response.json().data as Recipe)
      .catch(this.handleError)
  }

  getRecipeById(recipe_id: number): Promise<Recipe> {
    return this.http
      .get(RECIPE_SERVER + `/v1/recipes/${recipe_id}.json`)
      .toPromise()
      .then(response => response.json().data as Recipe)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('ERROR OCCURRED TALKING TO SERVER' + error);
    return Promise.reject(error.message || error);
  }

}

