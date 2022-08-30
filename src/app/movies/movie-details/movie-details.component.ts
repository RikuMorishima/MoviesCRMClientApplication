import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast } from 'src/app/interfaces/cast';
import { MovieDetails } from 'src/app/interfaces/movieDetails';
import { Movie } from 'src/app/interfaces/movies';
import { CastService } from 'src/app/shared/models/cast.service';
import { MovieService } from 'src/app/shared/models/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private movieService:MovieService, private castService:CastService) {

  }

  showAll:boolean = true;
  showDetails:boolean = false;

  movieDetails:MovieDetails[] = [];
  _singleMovieDetail!: Movie;
  _singleMovie_Casts:Cast[]=[];
  movieRatingColor: Record<string,boolean> = {};

  ngOnInit(): void {
    this.ar.queryParams.subscribe(querydata=>{
      //console.log(querydata["id"]);
      this.showAll=querydata['showAll'];
      if(!this.showAll && querydata["id"]!=undefined) {
        // check if movie id exists
        this.loadSingleMovie(querydata["id"]);
      } else {
        this.loadAllMovies();
      }
    });
    console.log(this.showDetails);
  }

  loadSingleMovie(id:number) {
    this.movieService.getMovieDetails(id).subscribe((movieData)=>{
      if (movieData != null) {
        // insert movie data into model
        this.showDetails=true;
        this._singleMovieDetail = movieData;
        // console.log("hi");
         console.log(this._singleMovieDetail);
        this._singleMovieDetail.casts.forEach(cast => {
          console.log(cast["castId"]);
           console.log(cast);
          if (cast.castId !=undefined){
          this.castService.getCastById(cast.castId).subscribe((castData: Cast)=>{
            console.log(castData);
            this._singleMovie_Casts.push(castData);
            cast.cast = castData;
            console.log()
          }, (error:any)=> {
            console.log(error);
          });
          console.log(this._singleMovieDetail);
        }
        });
         console.log(this._singleMovieDetail);
        // console.log(this._singleMovie_Casts);
      } else {
        this.loadAllMovies();
        this.showDetails = false;
      }
    }, (error)=> {
      console.log(error);
      this.loadAllMovies();
      this.showDetails = false;
    });
  }

  loadAllMovies() {
      this.showDetails = false;
      // get movie list
      let list = this.movieService.getAllMovies().subscribe(movieList => {
        movieList.forEach((movie)=>{
          let genre = movie.genres;
          //console.log(genre);
          let genrename='';
          if (genre.length ==0) {
            genrename="N/A";
          } else {
            genrename=genre[0].genres.name;
          } 
          // Read the result field from the JSON response.
          //console.log(movie);
          let movieDetail:MovieDetails= {
            id: movie["id"],
            title: movie["title"],
            genre: genrename,
            overview: movie["overview"],
            cast: '',
            rating: 8.1
          } 
        this.movieDetails.push(movieDetail);
      });        
      console.log(this.movieDetails);
    })
  }

  setColor(rating:number) {
    this.movieRatingColor = {
      "success": rating >= 8,
      "warning": rating < 8 && rating > 7,
      "danger": rating <= 7,
    }
  }
  filterRating(rating:number) {
      if (rating >= 8) {
        return true;
      } return false;
  }
 

}
