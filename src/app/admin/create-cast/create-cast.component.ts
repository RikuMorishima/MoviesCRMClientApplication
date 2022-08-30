import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cast } from 'src/app/interfaces/cast';
import {MovieCast} from 'src/app/interfaces/movieCast';
import { CastService } from 'src/app/shared/models/cast.service';

@Component({
  selector: 'app-create-cast',
  templateUrl: './create-cast.component.html',
  styleUrls: ['./create-cast.component.css']
})
export class CreateCastComponent implements OnInit {

  constructor(private service:CastService) { }

  createCast:Cast = {
    name:'',
    gender:'',
    tmdbUrl:'',
    profilePath:'',
    movies:[], 
    id:0
  }

  ngOnInit(): void { 
  }

  createCastSubmit(createCastForm:NgForm) {
    this.createCast.gender=createCastForm.value.gender;
    this.createCast.name=createCastForm.value.name;
    this.createCast.tmdbUrl=createCastForm.value.tmdbUrl;
    this.createCast.profilePath=createCastForm.value.profilePath;
    if (createCastForm.valid) {
      console.log(createCastForm.value);
      this.service.postCasts(this.createCast);
    }
  }
}
