import { useEffect, useState } from 'react';
import MovieLists from '../Components/MovieLists/MovieLists';
import { filterDataByName } from "../helper/helper";
import IMovieList from "../models/IMovieObj";
import { getComingSoon } from "../services/moviesData";

const ComingSoon = ({ movieName }: { movieName: string }) => {
    const [moviesList, setMoviesList] = useState<IMovieList[]>([]);
    const [title, setTitle] = useState<string>("");
    useEffect(() => {
        const helper = async () => {
            const list = await getComingSoon();
            setMoviesList(list);
            setTitle("Coming Soon");
        }
        helper();
    }, []);
    let filter = filterDataByName(movieName, moviesList);
    return <MovieLists title={title} moviesList={filter || moviesList} url={`/coming-soon`} />
}
export default ComingSoon;