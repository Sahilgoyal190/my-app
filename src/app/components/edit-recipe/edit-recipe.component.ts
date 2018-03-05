import { Component } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { Router } from '@angular/router';
import {RecipeService} from '../../services/recipe.service';
@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent {

  recipes: Recipe[];

  recipe_in_progress: Recipe;

  constructor(private router: Router,
    private recipe_service: RecipeService) {
    this.recipe_in_progress = Recipe.createBlank();
  }

  addIngredientPressed(): void {
    this.recipe_in_progress.ingredients.push({ ingredient: null, measure: null });
  }

  addInstructionPressed(): void {
    this.recipe_in_progress.instructions.push({ instruction: null, photo: null } );
  }

  removeIngredientAtIndex(index): void {
    this.recipe_in_progress.ingredients.splice(index, 1);
  }

  removeInstructionAtIndex(index): void {
    this.recipe_in_progress.instructions.splice(index, 1);
  }
  public addRecipe() {
    this.recipe_service.addnewRecepie(this.recipe_in_progress).then(id=>{
      this.router.navigateByUrl('/recipe/' + id);
    })
    // this.recipes.unshift(this.recipe_in_progress);
    // this.recipe_in_progress = Recipe.createBlankRecipe();
  }
}














// addIngredientPressed(): void {
//   if (!this.recipe_in_progress.ingredients) {
//     this.recipe_in_progress.ingredients = [ { ingredient: null, measure: null } ];
//   } else {
//     this.recipe_in_progress.ingredients.push({ ingredient: null, measure: null } );
//   }
// }

// addInstructionPressed(): void {
//   if (!this.recipe_in_progress.instructions) {
//     this.recipe_in_progress.instructions = [ { instruction: null, photo: null } ];
//   } else {
//     this.recipe_in_progress.instructions.push({ instruction: null, photo: null } );
//   }
// }

// removeIngredientAtIndex(index): void {
//   this.recipe_in_progress.ingredients.splice(index, 1);
// }

// removeInstructionAtIndex(index): void {
//   this.recipe_in_progress.instructions.splice(index, 1);
// }