import { useEffect, useState } from 'react';
import MovieLists from '../Components/MovieLists/MovieLists';
import { filterDataByName } from "../helper/helper";
import IMovieList from "../models/IMovieObj";
import { getMoviesInTheaters } from "../services/moviesData";

const MoviesInTheaters = ({ movieName, page }: { movieName: string, page?: string }) => {
    const [moviesList, setMoviesList] = useState<IMovieList[]>([]);
    const [title, setTitle] = useState<string>("");
    useEffect(() => {
        const helper = async () => {
            const list = await getMoviesInTheaters();

            if(page === "home") {
                setMoviesList(list.slice(0, 4));
            } else {
                setMoviesList(list);
            }
            setTitle("Movies In Theaters");
        }
        helper();
    }, []);
    let filter = filterDataByName(movieName, moviesList);
    return <MovieLists title={title} moviesList={filter || moviesList} url={`/movies-in-theaters`} page={page} />
}
export default MoviesInTheaters;