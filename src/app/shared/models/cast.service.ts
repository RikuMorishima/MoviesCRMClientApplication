import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cast } from 'src/app/interfaces/cast';
import { environment } from 'src/environments/environment';
import { MovieCast } from 'src/app/interfaces/movieCast';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http: HttpClient) { }
  menu: any;

  getCasts():any{
    this.http.get<Cast>(environment.server+'/cast/details');
  }
  getCastById(id:number):any {
    this.http.get<Cast>(environment.server+'/cast/details/'+id);
  }
  postCasts(cast:Cast):any{
    this.http.post<Cast>(environment.server+'/cast/add',cast);
  }

  putCasts(cast:Cast):any {
    this.http.put(environment.server+'/cast/update',cast);
  }

  bindMovieCast(movieCast:MovieCast):any {
    this.http.post(environment.server+'/cast/addCastToMovie',movieCast);
  }

}
