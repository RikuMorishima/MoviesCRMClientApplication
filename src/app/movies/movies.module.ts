import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { ConcatPipe } from '../shared/pipes/concat.pipe';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
    declarations: [
      MovieDetailsComponent,
      ConcatPipe
    ],
    imports: [
      BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class MoviesModule { }
  