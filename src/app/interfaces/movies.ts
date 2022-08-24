
import { Favorite } from "./favorite";
import { MovieCast } from "./movieCast";
import { MovieCrew } from "./movieCrew";
import { MovieGenre } from "./movieGenre";
import { Purchase } from "./purchase";
import { Review } from "./review";
import { Trailer } from "./trailer";


export interface Movie {
    id: number,
    title: string,
    overview:string,
    tagline:string,
    budget:number,
    revenue: number,
    imdbUrl:string,
    tmdbUrl:string,
    posterUrl:string,
    backDropUrl:string,
    originalLanguage:string,
    releaseDate:Date,
    runtime:number,
    price:number,
    createdDate:Date,
    updatedDate:Date,
    createdBy: string,
    updatedBy: string,
    casts: MovieCast[],
    genres: MovieGenre[],
    Crews: MovieCrew[],
    reviews: Review[],
    purchases: Purchase[], 
    favorite: Favorite[],
    trailers: Trailer[]
}