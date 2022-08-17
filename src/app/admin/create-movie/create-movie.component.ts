import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor() { }
  createMovie={
    title:'',
    overview:'',
    tagline:'',
    budget:0,
    revenue:0,
    imdburl:'',
    tmdburl:'',
    posterurl:'',
    backdropurl:'',
    originallanguage:'',
    releasedate:'',
    runtime:0,
    price:0.0
  }

  ngOnInit(): void {
  }
  createMovieSubmit(createMovieForm:NgForm){
    if(createMovieForm.valid)
      console.log(createMovieForm.value)
  }
}
