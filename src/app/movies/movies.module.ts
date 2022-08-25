import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
    declarations: [
      MovieDetailsComponent,
      TruncatePipe
    ],
    imports: [
      CommonModule,
      MoviesRoutingModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
  })
  export class MoviesModule { }
  