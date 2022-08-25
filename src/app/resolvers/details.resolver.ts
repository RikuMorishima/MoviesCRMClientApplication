import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { StringOrNumberOrDate } from '@swimlane/ngx-charts';
import { Observable, of } from 'rxjs';
import { Movie } from '../interfaces/movies';
import { MovieService } from '../shared/models/movie.service';

export interface IMovieDetails {
  title: string,
  overview: string,
  tagline: string,
  budget: number,
  revenue: number,
  imdburl: string,
  tmdburl: string,
  posterurl: string,
  backdropurl: string,
  originallanguage: string,
  releasedate:Date,
  runtime: number, 
  createddate:Date,
  updatedDate: Date,
  updatedby:string,
  cratedby:string,
}

@Injectable({
  providedIn: 'root'
})
export class DetailsResolver implements Resolve<Movie> {

  constructor(private movieService:MovieService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie> {
    return this.movieService.getAllMovies();
  }
}
