import { MovieCrew } from "./movieCrew";

export interface Crew {
    id:number,
    name:string,
    gender:string,
    tmdbUrl:string,
    ProfilePath:string,
    movies:MovieCrew
}