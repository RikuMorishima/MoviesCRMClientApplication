import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/interfaces/movieDetails';
import { Movie } from 'src/app/interfaces/movies';
import { MovieService } from 'src/app/shared/models/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private movieService:MovieService) {

  }

  showAll:boolean = true;
  showDetails:boolean = false;

  movieDetails:MovieDetails[] = [];
  movieRatingColor: Record<string,boolean> = {};

  ngOnInit(): void {
    this.ar.queryParams.subscribe(querydata=>{
      console.log(querydata["id"]);
      this.showAll=querydata['showAll'];
      if(!this.showAll) {
        // check if movie id exists
        let movieExists = false;
        this.movieService.getMovieDetails(querydata["id"]).subscribe((movieData)=>{
          if (movieData != null) {
            // insert movie data into model
            movieExists = true;
          } else {
            this.loadAllMovies();
          }
        }, (error)=> {
          console.log(error);
          this.loadAllMovies();
        });

      } else {
        this.loadAllMovies();
      }
    });
  }

  loadAllMovies() {
      this.showDetails = false;
      // get movie list
      let list = this.movieService.getAllMovies().subscribe(movieList => {
        movieList.forEach((movie)=>{
          let genre = movie.genres;
          console.log(genre);
          let genrename='';
          if (genre.length ==0) {
            genrename="N/A";
          } else {
            genrename=genre[0].genres.name;
          } 
          // Read the result field from the JSON response.
          console.log(movie);
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
