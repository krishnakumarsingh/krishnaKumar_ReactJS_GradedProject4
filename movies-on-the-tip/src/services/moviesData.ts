import axios from 'axios';

const apiBaseUrl: string = process.env.REACT_APP_API_BASE_URL as string;

const getMoviesData = async (id: string, type: string) => {
    let list: any[] = [];
    if (type.toLocaleLowerCase().includes('coming soon')) {
        list = await getComingSoon();
    } else if (type.toLocaleLowerCase().includes('movies in theaters')) {
        list = await getMoviesInTheaters();
    } else if (type.toLocaleLowerCase().includes('top rated indian')) {
        list = await getTopRatedIndian();
    } else if (type.toLocaleLowerCase().includes('top rated movies')) {
        list = await getTopRatedMovies();
    }
    let movie = list.find((item) => item.id === id);
    return movie;
}

const setMoviesData = async (movieData: any, type: string) => {
    const response = await axios.post(`${apiBaseUrl}favourite`, movieData, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data).catch((error: Error | undefined) => alert("Already added"));
    return response;
}

const removeMoviesData = async (movieData: any, type: string) => {
    const response = await axios.delete(`${apiBaseUrl}favourite/${movieData.id}`)
        .then(response => console.log(response.data))
        .catch((error: Error | undefined) => console.log("Already added", error));
    return response;
}

const getComingSoon = async () => {
    const response = await axios.get(`${apiBaseUrl}movies-coming`).then(response => response.data);
    return response;
}

const getMoviesInTheaters = async () => {
    const response = await axios.get(`${apiBaseUrl}movies-in-theaters`).then(response => response.data);
    return response;
}

const getTopRatedIndian = async () => {
    const response = await axios.get(`${apiBaseUrl}top-rated-india`).then(response => response.data);
    return response;
}

const getTopRatedMovies = async () => {
    const response = await axios.get(`${apiBaseUrl}top-rated-movies`).then(response => response.data);
    return response;
}

const getFavourite = async () => {
    const response = await axios.get(`${apiBaseUrl}favourite`).then(response => response.data);
    return response;
}

export {
    setMoviesData,
    getMoviesData,
    getComingSoon,
    getMoviesInTheaters,
    getTopRatedIndian,
    getTopRatedMovies,
    getFavourite,
    removeMoviesData,
};
