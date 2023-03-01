import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Components/Header/Header';
import MoviesDetails from "../Components/MoviesDetails/MoviesDetails";
import { AddToCartContext } from '../services/createContext';
import { getFavourite } from '../services/moviesData';
import AddToCart from './AddToCart';
import ComingSoon from "./ComingSoon";
import Home from './Home';
import MoviesInTheaters from "./MoviesInTheaters";
import NoPage from './NoPage';
import TopRatedIndian from "./TopRatedIndian";
import TopRatedMovies from "./TopRatedMovies";

const App = () => {
    const [movieName, setMovieName] = useState<string>("");
    const [error, setError] = useState<Error | null>(null);
    const [addToCartmovies, setAddToCartmovies] = useState<number>(0);
    const searchData = (message:string) => {
        setMovieName(message);
    }
    useEffect(() => {
        const helper = async () => {
            try {
                const list = await getFavourite();
                setAddToCartmovies(list.length);
            } catch (error) {
                setError(error as Error);
            }
        }
        helper();
    }, []);
    if(error) return <>Getting Error</>
    return (
        <AddToCartContext.Provider value={addToCartmovies}>
            <Router>
                <Header searchData={searchData} moviesList={addToCartmovies} />
                <Routes>
                    <Route path="/" element={<Home movieName={movieName} />} />
                    <Route path="/home" element={<Home movieName={movieName} />} />
                    <Route path="/coming-soon" element={<ComingSoon movieName={movieName} />} />
                    <Route path="/movies-in-theaters" element={<MoviesInTheaters movieName={movieName} />} />
                    <Route path="/top-rated-indian" element={<TopRatedIndian movieName={movieName} />} />
                    <Route path="/top-rated-movies" element={<TopRatedMovies movieName={movieName} />} />
                    <Route path="/add-to-cart" element={<AddToCart movieName={movieName} />} />
                    <Route path="/movies-in-theaters/:id" element={<MoviesDetails />} />
                    <Route path="/coming-soon/:id" element={<MoviesDetails />} />
                    <Route path="/top-rated-indian/:id" element={<MoviesDetails />} />
                    <Route path="/top-rated-movies/:id" element={<MoviesDetails />} />
                    <Route path='*' element={<NoPage />}/>
                </Routes>
            </Router>
        </AddToCartContext.Provider>
    )
}
export default App;