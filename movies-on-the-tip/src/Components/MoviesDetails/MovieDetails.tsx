
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';
import { avgRating } from '../../helper/helper';
import IMovieList from "../../models/IMovieObj";
import Genres from '../Shared/Genres';
import Loader from '../Shared/Loader';
import Rating from '../Shared/Ratings';
import Starts from '../Shared/Starts';

const imgBaseUrl = process.env.REACT_APP_IMG_BASE_URL;

const MovieDetails = ({ movie }: { movie: IMovieList }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [open, setOpen] = useState<boolean>(false);
    useEffect(() => {
        if(movie.title) {
            setLoading(false);
        }
    }, [movie]);
    console.log(movie)
    if (loading) return <Loader />;
    return (
        <Card className={"bg-dark text-white"}>
            <Row>
                <Col md={{ span: 3, offset: 1 }} className="movies-details" style={{ "backgroundImage": `url('${imgBaseUrl}/${movie.poster}')` }}></Col>
                <Col md={{ span: 7 }}>
                    <Card.Body>
                        <Card.Title><h1>{movie.title}</h1></Card.Title>
                        <Card.Text><strong>Year: </strong>{movie.year} - <strong>Duration: </strong>{movie.duration?.toLocaleLowerCase().split('pt')[1]}</Card.Text>
                        <Card.Text
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className="pointer"
                        ><Rating rating={avgRating(movie.ratings)} numRatings={movie.ratings?.length} /></Card.Text>
                        <Collapse in={open}>
                            <div id="other-ratings-collapse" className='other-ratings-collapse'>
                                <p><strong>Content Rating :</strong> {movie.contentRating}</p>
                                <p><strong>IMDB Rating :</strong> {movie.imdbRating}</p>
                            </div>
                        </Collapse>
                        <Card.Text>{movie.storyline}</Card.Text>
                        <Genres genres={movie.genres} />
                        <Starts starts={movie.actors} />
                        <p><strong>Release Date :</strong> {movie.releaseDate}</p>
                    </Card.Body>
                </Col>
            </Row>

        </Card>
    )
}
export default MovieDetails;