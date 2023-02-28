import IMovieList from "../models/IMovieObj";
const filterDataByName = (data:string, moviesList:IMovieList[]) => {
    const filterData = moviesList.filter(item => item.title?.toLocaleLowerCase().includes(data.toLowerCase()));
    return filterData;
}
const avgRating = (ratings:any) => {
    let total = ratings?.reduce((a:number, b:number) => Math.floor(a) + Math.floor(b), 0);
    return (total/(ratings.length)/2);
}
export {
    avgRating,
    filterDataByName
}