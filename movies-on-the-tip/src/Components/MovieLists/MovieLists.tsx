import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import IMovieList, { IMovieObj } from "../../models/IMovieObj";
import { AddToCartContext } from '../../services/createContext';
import Loader from '../Shared/Loader';
import MovieList from './MovieList';
import "./movieList.css";
const MovieLists = ({ title, moviesList, url, nameData, page }: { title: string, moviesList: IMovieObj[], url?: string, nameData?: any, page?: string }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (moviesList.length > 0) {
            setLoading(false);
        }
    }, [moviesList]);
    if (loading) {
        return <Loader />
    }
    return (
        <AddToCartContext.Consumer>
            {(addToCartmoviesFn) => (
                moviesList.length > 0 && <div className='container'>
                    {title && <h2 className='movie-list-title'>{title}:
                        {page === "home" && url && <Button onClick={() => window.location.href = url}>View More</Button>}</h2>}
                    <div className='card-list-container'>
                        {
                            moviesList && moviesList.map(item => <MovieList key={item.id as string} addToCartmoviesFn={addToCartmoviesFn} movieData={item as IMovieList} url={url} type={title} nameData={nameData} />)
                        }
                    </div>
                </div>
            )}
        </AddToCartContext.Consumer>
    )
}
export default MovieLists;