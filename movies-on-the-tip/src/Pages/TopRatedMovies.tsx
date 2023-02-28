import { useEffect, useState } from 'react';
import MovieLists from '../Components/MovieLists/MovieLists';
import { filterDataByName } from "../helper/helper";
import IMovieList from "../models/IMovieObj";
import { getTopRatedMovies } from "../services/moviesData";

const TopRatedMovies = ({movieName}:{movieName:string}) => {
    const [moviesList, setMoviesList] = useState<IMovieList[]>([]);
    const [error, setError] = useState<null | Error>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [title, setTitle] = useState<string>("");
    useEffect(() => {
        const helper = async () => {
            try {
                const list = await getTopRatedMovies();
                setMoviesList(list);
                setTitle("Top Rated Movies");
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }
        helper();
    }, []);

    let filter = filterDataByName(movieName, moviesList);
    return <MovieLists title={title} moviesList={moviesList || filter} loading={loading} error={error} url={`/top-rated-movies`} />
}
export default TopRatedMovies;