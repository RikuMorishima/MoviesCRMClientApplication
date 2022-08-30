import { Cast } from "./cast";
import { Movie } from "./movies";

export interface MovieCast {
    movieId:number,
    castId: number,
    character:string,
    movieRef:Movie,
    cast: Cast
}