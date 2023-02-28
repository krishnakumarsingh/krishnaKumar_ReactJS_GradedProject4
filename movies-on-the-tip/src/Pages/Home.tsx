
import ComingSoon from "./ComingSoon";
import MoviesInTheaters from "./MoviesInTheaters";

const Home = ({movieName}:{movieName:string}) => {
    return (
        <>
            <MoviesInTheaters movieName={movieName} />
            <ComingSoon movieName={movieName} />
        </>
    )
}
export default Home;