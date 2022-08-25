import { Numeric } from "d3";
import { MovieGenre } from "./movieGenre";

export interface Genre {
    id: number,
    name:string,
    movies:MovieGenre
}