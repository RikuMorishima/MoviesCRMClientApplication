import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  menu: any;

  getPurchasedMovies():any{
    this.http.get('/user/purchases').subscribe(data => {
      // Read the result field from the JSON response.
      return data;
    });        
  }

  getFavoritedMovies():any{
    this.http.get('/user/favorites').subscribe(data => {
      // Read the result field from the JSON response.
      return data;
    });        
  }
}
