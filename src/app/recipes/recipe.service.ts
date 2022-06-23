import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Beaf stake', 'Yummy Stake', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg')
  ];
  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }
}
