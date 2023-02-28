import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import MovieLists from '../Components/MovieLists/MovieLists';
import IMovieList from '../models/IMovieObj';
import { AddToCartContext } from '../services/createContext';
import { getFavourite, removeMoviesData } from '../services/moviesData';

const AddToCart = () => {
    const [moviesList, setMoviesList] = useState<IMovieList[]>([]);
    const [error, setError] = useState<null | Error>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        const helper = async () => {
            try {
                const list = await getFavourite();
                setMoviesList(list);
                setTitle("Movies In Theaters");
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }
        helper();
    }, []);
    const moviesListData = (movieData:any, type:string) => {
        removeMoviesData(movieData, type)
            .then(async res => {
                setMoviesList(await getFavourite());
            });
    };
    if(moviesList.length === 0) {
        return <div className='container'>
            <Alert key={'danger'} variant={'danger'}>
                No Data!!
            </Alert>
        </div>
    }
    return (
        <MovieLists title={"Favorite "} moviesList={moviesList} loading={loading} error={error} nameData={moviesListData} />
    )
}
export default AddToCart;