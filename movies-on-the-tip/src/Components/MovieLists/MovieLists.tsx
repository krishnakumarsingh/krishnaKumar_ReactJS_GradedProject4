import { Alert, Spinner } from 'react-bootstrap';
import { IMovieObj } from '../../models/IMovieObj';
import MovieList from './MovieList';
import IMovieList from "../../models/IMovieObj";
import "./movieList.css";
const MovieLists = ({title, moviesList, loading, error, url, nameData}: {title:string, moviesList:IMovieObj[], loading:boolean, error:null | Error, url?:string, nameData?: any}) => {

    if (moviesList.length === 0) return null;
    return (
        <div className='container'>
            {title && <h2>{title}:</h2>}
            {moviesList.length === 0 && <Alert key={'danger'} variant={'danger'}>
                No Data!!
            </Alert>}
            <div className='card-list-container'>
                {
                    loading && (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    )
                }
                {
                    !loading && error && (
                        <Alert key={"danger"} variant={"danger"}>
                            {error.message}
                        </Alert>
                    )
                }
                {
                    !loading && !error && (
                        moviesList && moviesList.map(item => {
                            return (<MovieList key={item.id as string} movieData={item as IMovieList} url={url} type={title} nameData={nameData} />)
                        })
                    )
                }
            </div>
        </div>
    )
}
export default MovieLists;