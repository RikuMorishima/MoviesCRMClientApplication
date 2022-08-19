import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MovieService } from '../shared/models/movie.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsResolver implements Resolve<boolean> {

  constructor(private movieService:MovieService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.movieService.getPurchasedMovies();
  }
}
