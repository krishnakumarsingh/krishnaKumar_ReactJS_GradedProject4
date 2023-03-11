import Badge from 'react-bootstrap/Badge';

type props = {
    starts: string[],
}

const Starts = ( { starts } : props ) => {
    return (
        <p>
            <strong>Starts : </strong> {starts.map((item) => <><Badge key={item as string} pill bg="light" text="dark">{item}</Badge>{" "}</>)}
        </p>
    )
}

Starts.defaultProps = {
    starts: []
};

export default Starts;