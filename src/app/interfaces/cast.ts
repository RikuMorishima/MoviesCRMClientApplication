import { MovieCast } from "./movieCast";

export interface Cast {
    id:number,
    name:string,
    gender:string,
    tmdbUrl:string,
    ProfilePath:string,
    movies:MovieCast
}