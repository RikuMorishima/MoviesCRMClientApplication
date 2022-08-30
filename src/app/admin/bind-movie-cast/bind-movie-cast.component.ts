import { Component, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/cast';

@Component({
  selector: 'app-bind-movie-cast',
  templateUrl: './bind-movie-cast.component.html',
  styleUrls: ['./bind-movie-cast.component.css']
})
export class BindMovieCastComponent implements OnInit {

  constructor() { }

  cast:Cast = {
    id: 0,
    name: '',
    gender: '',
    tmdbUrl: '',
    profilePath: '',
    movies: []
  }

  ngOnInit(): void {
  }

  

}
