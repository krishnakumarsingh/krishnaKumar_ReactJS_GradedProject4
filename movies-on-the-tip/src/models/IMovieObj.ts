export interface IMovieObj {
    id?: String,
    title?: String,
    poster?: String,
    storyline?: String,
    searchData?: (message: string) => any,
}
export default interface IMovieList {
    id?: String,
    title?: String,
    year?: String,
    genres?: [],
    ratings?: [],
    poster?: String,
    contentRating?: String,
    duration?: String,
    releaseDate?: String,
    averageRating?: number,
    originalTitle?: String,
    storyline?: String,
    actors?: [],
    imdbRating?: number,
    posterurl?: String
}


