
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { avgRating } from '../../helper/helper';
import IMovieList from "../../models/IMovieObj";
import { setMoviesData } from '../../services/moviesData';
import Rating from '../Shared/Ratings';

const imgBaseUrl = process.env.REACT_APP_IMG_BASE_URL;

const MovieList = ({ movieData, classNames, url, type, nameData }: { movieData?: IMovieList | undefined, classNames?: string, url?: string, type: string, nameData?: any }) => {
    if (!movieData) return null;
    if (!avgRating(movieData.ratings)) return null;
    const addToCartType = window.location.pathname.includes("add-to-cart");
    const toHref = addToCartType ? `${movieData.id}` : `${url}/:${movieData.id}`;
    return (
        <Card className={classNames ? classNames : ""}>
            <Card.Img variant="top" src={`${imgBaseUrl}/${movieData.poster}`} />
            <Card.Body>
                <Card.Title>{movieData.title}</Card.Title>
                <Card.Text><Rating rating={avgRating(movieData.ratings)} numRatings={movieData.ratings?.length} /></Card.Text>
                <div>{!addToCartType && <Button variant="info" active style={{ width: '50%' }}><Nav.Link as={Link} to={toHref}>View More</Nav.Link></Button>}
                    {' '}{addToCartType && <Button variant="danger" active style={{ width: '100%' }} onClick={() => nameData(movieData, type)}>- Watchlist</Button>}
                    {!addToCartType && <Button variant="success" active style={{ width: '50%', marginRight: '-10px' }} onClick={() => setMoviesData(movieData, type)}>+ Watchlist</Button>}
                </div>
            </Card.Body>
        </Card>
    );
}
export default MovieList;