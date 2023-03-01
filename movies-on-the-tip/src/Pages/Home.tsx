
import ComingSoon from "./ComingSoon";
import MoviesInTheaters from "./MoviesInTheaters";
import TopRatedIndian from "./TopRatedIndian";
import TopRatedMovies from "./TopRatedMovies";

const Home = ({movieName}:{movieName:string}) => {
    return (
        <>
            <MoviesInTheaters movieName={movieName} />
            <ComingSoon movieName={movieName} />
            <TopRatedIndian movieName={movieName} />
            <TopRatedMovies movieName={movieName} />
        </>
    )
}
export default Home;