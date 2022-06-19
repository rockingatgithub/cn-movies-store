import React from "react";
import { connect } from "react-redux";
import { addToCart, addTodo, addToFavourites, getMoviesList, removeFromFavourite } from "../actions";
import FavouriteList from "./Favourite-List";
import MovieCard from "./MovieCard";

// const API_KEY = 'e08d15260b80f4fba575a381012e7ce8';

// const BASE_URL = 'https://api.themoviedb.org/3';

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      isVisible: false,
    }

  }

  componentDidMount = async () => {

    this.props.dispatch(getMoviesList())

    
  }

  addToFavourite = (movie) => {

    this.props.dispatch(addToFavourites(movie))


  }

  removeFavourite = (movie) => {

    this.props.dispatch(removeFromFavourite(movie))

  }

  addToCart = ( movie ) => {

    this.props.dispatch(addToCart(movie));

  }

   

  render () {

    return (

      <div>

          <nav>
          <i class="fa-solid fa-cart-shopping"></i> <span> {this.props.cartItems.length} </span>
          </nav>

          <h3>Welcome to the Movies Store</h3>



          <div className="movies-container" >

            <ul className="movies-list">
              {this.props.moviesList.map((movie) => 


                <MovieCard movie={movie} favouriteCallback={this.addToFavourite} addToCart={this.addToCart} />

              )}
            </ul>

          </div>

          <h1>Favourite List</h1>

          <FavouriteList moviesList={this.props.favouriteList} removeFavourite={this.removeFavourite} addToCart={this.addToCart}  />


      </div>

    )

  }

}

const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
  favouriteList : state.favouriteList,
  cartItems: state.cartItems,
  moviesList: state.moviesList
})

export default  connect(mapStateToProps)(App);