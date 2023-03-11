import Badge from 'react-bootstrap/Badge';

type props = {
    genres: string[],
}

const Genres = ( { genres } : props ) => {
    return (
        <p>
            <strong>Genres : </strong> {genres.map((item) => <><Badge key={item as string} pill bg="light" text="dark">{item}</Badge> {" "}</>)}
        </p>
    )
}

Genres.defaultProps = {
    genres: []
};

export default Genres;