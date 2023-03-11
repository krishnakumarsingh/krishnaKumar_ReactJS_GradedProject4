
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import IMovieList from "../../models/IMovieObj";
import { getComingSoon, getMoviesInTheaters, getTopRatedIndian, getTopRatedMovies } from '../../services/moviesData';
import MovieDetails from './MovieDetails';
import "./MoviesDetails.css";

const MoviesDetails = () => {
    const [movie, setMovie] = useState<IMovieList>({});
    const { id } = useParams();
    useEffect(() => {
        const helper = async () => {
            let list:any[] = [];
            if (window.location.pathname.includes('coming-soon')) {
                list = await getComingSoon();
            } else if (window.location.pathname.includes('movies-in-theaters')) {
                list = await getMoviesInTheaters();
            } else if (window.location.pathname.includes('top-rated-indian')) {
                list = await getTopRatedIndian();
            } else if (window.location.pathname.includes('top-rated-movies')) {
                list = await getTopRatedMovies();
            }
            let movie = list.find((item: { id: string | undefined; }) => item.id === id?.split(":")[1]);
            setMovie(movie);
        }
        helper();
    }, [id]);
    return (
        <Card style={{ "height": "calc(100vh - 90px)" }}>
            <Card.ImgOverlay>
                <MovieDetails movie={movie} />
            </Card.ImgOverlay>
        </Card>
    );
}
export default MoviesDetails;