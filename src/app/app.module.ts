import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { ConcatPipe } from './shared/pipes/concat.pipe';
import { MoviesCreateComponent } from './core/movies/movies-create/movies-create.component';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { CreateCastComponent } from './admin/create-cast/create-cast.component';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesCreateComponent,
    CreateMovieComponent,
    CreateCastComponent,
    PageNotFoundComponent,    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
