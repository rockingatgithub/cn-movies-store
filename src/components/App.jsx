import React from "react";
import FavouriteList from "./Favourite-List";
import MovieCard from "./MovieCard";

// const API_KEY = 'e08d15260b80f4fba575a381012e7ce8';

// const BASE_URL = 'https://api.themoviedb.org/3';

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      moviesList: [],
      favouriteList: [],
      isVisible: false,
      cartItems: [],

    }

  }

  componentDidMount = async () => {

    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e08d15260b80f4fba575a381012e7ce8&language=en-US&page=1`)

    let parsedResponse = await response.json();

    this.setState({
      moviesList: [ ...parsedResponse.results  ]
    })

    
  }

  addToFavourite = (movie) => {

   this.setState((prevState) => ({ favouriteList: [...prevState.favouriteList, movie]  }) )

  }

  removeFavourite = (movie) => {

   const { favouriteList } = this.state

    let newFavouritesList = favouriteList.filter((curMovie) => curMovie.id !== movie.id);

    this.setState(
      { favouriteList: [...newFavouritesList] }
    )

  }

  addToCart = ( movie ) => {

    console.log("cart function called")

    this.setState((prevState) => ({  cartItems: [...prevState.cartItems, movie]  }))

  }

   

  render () {

    const { moviesList, favouriteList , cartItems } = this.state;



    return (

      <div>

          <nav>
          <i class="fa-solid fa-cart-shopping"></i> <span> {cartItems.length} </span>
          </nav>

          <h3>Welcome to the Movies Store</h3>



          <div className="movies-container" >

            <ul className="movies-list">
              {moviesList.map((movie) => 


                <MovieCard movie={movie} favouriteCallback={this.addToFavourite} addToCart={this.addToCart} />

              )}
            </ul>

          </div>

          <h1>Favourite List</h1>

          <FavouriteList moviesList={favouriteList} removeFavourite={this.removeFavourite} addToCart={this.addToCart}  />


      </div>

    )

  }

}


export default App;