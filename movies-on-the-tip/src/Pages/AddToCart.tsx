import { useEffect, useState } from 'react';
import MovieLists from '../Components/MovieLists/MovieLists';
import { NoData } from '../Components/Shared/NoData';
import { filterDataByName } from '../helper/helper';
import IMovieList from '../models/IMovieObj';
import { getFavourite, removeMoviesData } from '../services/moviesData';

const AddToCart = ({ movieName }: { movieName: string }) => {
    const [moviesList, setMoviesList] = useState<IMovieList[]>([]);
    const [loadNoData, setLoadNoData] = useState<boolean>();
    useEffect(() => {
        const helper = async () => {
            const list = await getFavourite();
            setMoviesList(list);
        }
        helper();
    }, []);
    useEffect(() => {
        if(moviesList.length === 0) {
            setLoadNoData(true);
        } else {
            setLoadNoData(false);
        }
    }, [moviesList]);
    const moviesListData = (movieData:any, type:string) => {
        removeMoviesData(movieData, type)
            .then(async res => {
                setMoviesList(await getFavourite());
            });
    };
    let filter = filterDataByName(movieName, moviesList);
    if(loadNoData) return <NoData />
    return (
        <MovieLists title={"Favorite "} moviesList={filter || moviesList} nameData={moviesListData} />
    )
}
export default AddToCart;