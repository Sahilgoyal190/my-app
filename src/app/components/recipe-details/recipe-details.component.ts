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
      
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recipe_service.getRecipeById(parseInt(params.get('id'), 10)).then((recipe)=>{
        this.recipe =recipe
      })
    });
  }


  goBackButtonPressed(): void {
    this.location.back();
  }
}
