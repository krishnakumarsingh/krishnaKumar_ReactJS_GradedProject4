
import ComingSoon from "./ComingSoon";
import MoviesInTheaters from "./MoviesInTheaters";
import TopRatedIndian from "./TopRatedIndian";
import TopRatedMovies from "./TopRatedMovies";

const Home = ({movieName}:{movieName:string}) => {
    return (
        <div className="home">
            <div><MoviesInTheaters movieName={movieName} page={"home"} /></div>
            <div><ComingSoon movieName={movieName} page={"home"} /></div>
            <div><TopRatedIndian movieName={movieName} page={"home"} /></div>
            <div><TopRatedMovies movieName={movieName} page={"home"} /></div>
        </div>
    )
}
export default Home;