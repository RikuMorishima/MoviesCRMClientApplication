import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private ar: ActivatedRoute) {

  }

  showAll:boolean = true;
  showDetails:boolean = false;

  movieDetails:any; 
  movieRatingColor: Record<string,boolean> = {};

  ngOnInit(): void {
    this.ar.queryParams.subscribe(data=>{
      console.log(data["id"]);
      this.showAll =data['showAll'];
      if (data["id"]==undefined) {
        this.showDetails = false;
        // get movie list
      } else {
        this.showDetails=true;

        // Get movie details
      }
    });
  }

  setColor(rating:number) {
    this.movieRatingColor = {
      "success": rating >= 8,
      "warning": rating < 8 && rating > 7,
      "danger": rating <= 7,
    }
  }

 

}
