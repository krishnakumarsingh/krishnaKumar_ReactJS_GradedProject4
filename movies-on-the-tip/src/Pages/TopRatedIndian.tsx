import { useEffect, useState } from 'react';
import MovieLists from '../Components/MovieLists/MovieLists';
import { filterDataByName } from "../helper/helper";
import IMovieList from "../models/IMovieObj";
import { getTopRatedIndian } from "../services/moviesData";

const TopRatedIndian = ({movieName}:{movieName:string}) => {
    const [moviesList, setMoviesList] = useState<IMovieList[]>([]);
    const [error, setError] = useState<null | Error>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [title, setTitle] = useState<string>("");
    useEffect(() => {
        const helper = async () => {
            try {
                const list = await getTopRatedIndian();
                setMoviesList(list);
                setTitle("Top Rated Indian");
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }
        helper();
    }, []);

    let filter = filterDataByName(movieName, moviesList);
    return <MovieLists title={title} moviesList={filter || moviesList} loading={loading} error={error} url={`/top-rated-indian`} />
}
export default TopRatedIndian;