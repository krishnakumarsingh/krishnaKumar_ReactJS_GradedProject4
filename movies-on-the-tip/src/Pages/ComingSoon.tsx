import { useEffect, useState } from 'react';
import MovieLists from '../Components/MovieLists/MovieLists';
import { filterDataByName } from "../helper/helper";
import IMovieList from "../models/IMovieObj";
import { getComingSoon } from "../services/moviesData";

const ComingSoon = ({ movieName }: { movieName: string }) => {
    const [moviesList, setMoviesList] = useState<IMovieList[]>([]);
    const [error, setError] = useState<null | Error>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [title, setTitle] = useState<string>("");
    useEffect(() => {
        const helper = async () => {
            try {
                const list = await getComingSoon();
                setMoviesList(list);
                setTitle("Coming Soon");
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }
        helper();
    }, []);
    let filter = filterDataByName(movieName, moviesList);
    return <MovieLists title={title} moviesList={filter || moviesList} loading={loading} error={error} url={`/coming-soon`} />
}
export default ComingSoon;