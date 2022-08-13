import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private ar: ActivatedRoute) {
    this.ar.queryParams.subscribe(data=>{
      console.log(data);
      this.showAll =data['showAll'];
    });
  }

  showAll:boolean = true;

  movieDetails:any; 
  movieRatingColor: Record<string,boolean> = {};

  ngOnInit(): void {
  }

  setColor(rating:number) {
    this.movieRatingColor = {
      "success": rating >= 8,
      "warning": rating < 8 && rating > 7,
      "danger": rating <= 7,
    }
  }

 

}
