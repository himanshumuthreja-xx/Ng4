import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGaurd } from '../auth/auth-gaurd.service';
import { RouterModule, Routes } from '@angular/router';

const recipeRoutes: Routes = [
    { path: '', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGaurd] },
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGaurd] },
        { path: ':id', component: RecipeDetailComponent }
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(recipeRoutes)
    ],
    exports: [RouterModule],
    providers: [AuthGaurd]
})
export class RecipeRouterModule { }
