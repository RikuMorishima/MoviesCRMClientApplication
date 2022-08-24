import { Cast } from "./cast";
import { Movie } from "./movies";

export interface MovieCast {
    MovieId:number,
    CastId: number,
    Character:string,
    MovieRef:Movie,
    cast: Cast
}