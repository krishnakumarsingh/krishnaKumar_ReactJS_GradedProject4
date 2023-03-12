import { useEffect, useState } from 'react';
import MovieLists from '../Components/MovieLists/MovieLists';
import { filterDataByName } from "../helper/helper";
import IMovieList from "../models/IMovieObj";
import { getTopRatedMovies } from "../services/moviesData";

const TopRatedMovies = ({ movieName, page }: { movieName: string, page?: string }) => {
    const [moviesList, setMoviesList] = useState<IMovieList[]>([]);
    const [title, setTitle] = useState<string>("");
    useEffect(() => {
        const helper = async () => {
            const list = await getTopRatedMovies();
            
            if(page === "home") {
                setMoviesList(list.slice(0, 4));
            } else {
                setMoviesList(list);
            }
            setTitle("Top Rated Movies");
        }
        helper();
    }, []);

    let filter = filterDataByName(movieName, moviesList);
    return <MovieLists title={title} moviesList={filter || moviesList} url={`/top-rated-movies`} page={page} />
}
export default TopRatedMovies;