import { MovieCast } from "./movieCast";

export interface Cast {
    id:number,
    name:string,
    gender:string,
    tmdbUrl:string,
    profilePath:string,
    movies:MovieCast[]
}