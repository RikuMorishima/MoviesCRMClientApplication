import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  menu: any;

  getPurchasedMovies():any{
    this.http.get('/movies/details').subscribe(data => {
      // Read the result field from the JSON response.
      return data;
    });        
  }

  getMovieDetails(id: number):any{
    this.http.get('/movies/details/'+id).subscribe(data => {
      // Read the result field from the JSON response.
      return data;
    });        
  }
}
