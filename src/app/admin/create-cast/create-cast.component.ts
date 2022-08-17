import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-cast',
  templateUrl: './create-cast.component.html',
  styleUrls: ['./create-cast.component.css']
})
export class CreateCastComponent implements OnInit {

  constructor() { }

  createCast = {
    name:'',
    gender:'',
    tmdbUrl:'',
    profilePath:''
  }

  ngOnInit(): void {
  }

  createCastSubmit(createCastForm:NgForm) {
    if (createCastForm.valid)
      console.log(createCastForm.value);
  }
}
