import { Genre } from "./genres";

export interface MovieGenre {
    movieId: number,
    genreId: number,
    movieTitle: string,
    genres: Genre
}