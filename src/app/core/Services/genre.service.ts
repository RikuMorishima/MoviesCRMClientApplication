import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }
  menu: any;
  getPurchasedMovies():any{
    this.http.get('/genres/all').subscribe(data => {
      // Read the result field from the JSON response.
      return data;
    });        
  }
}
