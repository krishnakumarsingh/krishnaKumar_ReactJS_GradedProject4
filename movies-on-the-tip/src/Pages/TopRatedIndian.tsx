import { useEffect, useState } from 'react';
import MovieLists from '../Components/MovieLists/MovieLists';
import { filterDataByName } from "../helper/helper";
import IMovieList from "../models/IMovieObj";
import { getTopRatedIndian } from "../services/moviesData";

const TopRatedIndian = ({ movieName, page }: { movieName: string, page?: string }) => {
    const [moviesList, setMoviesList] = useState<IMovieList[]>([]);
    const [title, setTitle] = useState<string>("");
    useEffect(() => {
        const helper = async () => {
            const list = await getTopRatedIndian();
            
            if(page === "home") {
                setMoviesList(list.slice(0, 4));
            } else {
                setMoviesList(list);
            }
            setTitle("Top Rated Indian");
        }
        helper();
    }, []);

    let filter = filterDataByName(movieName, moviesList);
    return <MovieLists title={title} moviesList={filter || moviesList} url={`/top-rated-indian`} page={page} />
}
export default TopRatedIndian;