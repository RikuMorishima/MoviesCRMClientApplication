import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateCastComponent } from "./create-cast/create-cast.component";
import { CreateMovieComponent } from "./create-movie/create-movie.component";

const routes:Routes = [
    { path: 'createCast', component:CreateCastComponent},
    { path: 'createMovie', component: CreateMovieComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
  