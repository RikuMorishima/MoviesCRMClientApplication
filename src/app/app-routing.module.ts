import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {path:'movies', loadChildren:()=>import('./movies/movies.module').then(m=>m.MoviesModule)},
    {path:'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},


    
    // This component should be last in the list
    {         
      path:"**",  
      component:PageNotFoundComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
