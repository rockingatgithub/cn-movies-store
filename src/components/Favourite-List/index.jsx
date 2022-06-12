import MovieCard from "../MovieCard";

const FavouriteList = (props ) => <ul>

    {props.moviesList.map(( movie ) =>   <MovieCard movie={movie} favouriteCallback={props.removeFavourite} addToCart={props.addToCart}  /> )}

</ul>


export default FavouriteList;