import { useEffect, useState } from 'react';
import MovieLists from '../Components/MovieLists/MovieLists';
import { filterDataByName } from "../helper/helper";
import IMovieList from "../models/IMovieObj";
import { getMoviesInTheaters } from "../services/moviesData";

const MoviesInTheaters = ({ movieName }: { movieName: string }) => {
    const [moviesList, setMoviesList] = useState<IMovieList[]>([]);
    const [title, setTitle] = useState<string>("");
    useEffect(() => {
        const helper = async () => {
            const list = await getMoviesInTheaters();
            setMoviesList(list);
            setTitle("Movies In Theaters");
        }
        helper();
    }, []);
    let filter = filterDataByName(movieName, moviesList);
    return <MovieLists title={title} moviesList={filter || moviesList} url={`/movies-in-theaters`} />
}
export default MoviesInTheaters;