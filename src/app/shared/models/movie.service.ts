import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/app/interfaces/movies';
import { Favorite } from "src/app/interfaces/favorite";
import { MovieCast } from "src/app/interfaces/movieCast";
import { MovieCrew } from "src/app/interfaces/movieCrew";
import { MovieGenre } from "src/app/interfaces/movieGenre";
import { Purchase } from "src/app/interfaces/purchase";
import { Review } from "src/app/interfaces/review";
import { Trailer } from "src/app/interfaces/trailer";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  menu: any;

  getPurchasedMovies():any{
    this.http.get(environment.server+'/movies/details').subscribe(data => {
      // Read the result field from the JSON response.
      return data;
    });        
  }

  getAllMovies(){
    console.log('Get all movies initiated')
    // let output:Movie={
    //   id: -1,
    //   title: '',
    //   overview:'',
    //   tagline:'',
    //   budget:-1,
    //   revenue: -1,
    //   imdbUrl:'',
    //   tmdbUrl:'',
    //   posterUrl:'',
    //   backDropUrl:'',
    //   originalLanguage:'', 
    //   releaseDate:new Date,
    //   runtime:-1,
    //   price:-1,
    //   createdDate:new Date,
    //   updatedDate:new Date,
    //   createdBy:'',
    //   updatedBy:'',
    //   casts: [],
    //   genres: [],
    //   Crews: [],
    //   reviews: [],
    //   purchases: [], 
    //   favorite: [], 
    //   trailers: []
    // };
    // this.http.get<any>(environment.server+'/movies/details/').subscribe(data => {
    //   // Read the result field from the JSON response.
    //   output.id=data["id"]; 
    // });        
    // return output; 
    return this.http.get<Movie[]>(environment.server+'/movies/details/');
  }

  getMovieDetails(id: number):Movie{
    let output:Movie={
      id: -1,
      title: '',
      overview:'',
      tagline:'',
      budget:-1,
      revenue: -1,
      imdbUrl:'',
      tmdbUrl:'',
      posterUrl:'',
      backDropUrl:'',
      originalLanguage:'', 
      releaseDate:new Date,
      runtime:-1,
      price:-1,
      createdDate:new Date,
      updatedDate:new Date,
      createdBy:'',
      updatedBy:'',
      casts: [],
      genres: [],
      Crews: [],
      reviews: [],
      purchases: [], 
      favorite: [], 
      trailers: []
    };
    this.http.get<Movie>(environment.server+'/movies/details/'+id).subscribe(data => {
      // Read the result field from the JSON response.
      output=data;
    });        
    return output; 
  }
}
