import { useEffect, useState } from 'react';
import MovieLists from '../Components/MovieLists/MovieLists';
import { filterDataByName } from "../helper/helper";
import IMovieList from "../models/IMovieObj";
import { getTopRatedMovies } from "../services/moviesData";

const TopRatedMovies = ({movieName}:{movieName:string}) => {
    const [moviesList, setMoviesList] = useState<IMovieList[]>([]);
    const [title, setTitle] = useState<string>("");
    useEffect(() => {
        const helper = async () => {
            const list = await getTopRatedMovies();
            setMoviesList(list);
            setTitle("Top Rated Movies");
        }
        helper();
    }, []);

    let filter = filterDataByName(movieName, moviesList);
    return <MovieLists title={title} moviesList={filter || moviesList} url={`/top-rated-movies`} />
}
export default TopRatedMovies;