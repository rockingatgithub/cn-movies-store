import React from "react";

// const API_KEY = 'e08d15260b80f4fba575a381012e7ce8';

// const BASE_URL = 'https://api.themoviedb.org/3';

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      moviesList: [],
      favouriteList: [],

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

  render () {

    const { moviesList  } = this.state;

    return (

      <div>

          <h3>Welcome to the Movies Store</h3>

          <div className="movies-container" >

            <ul className="movies-list">
              {moviesList.map((movie) => 


                <li>
                  <i class="fa fa-heart" aria-hidden="true" onClick={() => this.addToFavourite(movie)} ></i>
                  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie-logo"  />

                  <span>
                    <span>{movie.title}</span>
                    <br/>
                    <span>{ movie.release_date }</span>
                    <progress value={movie.vote_average} max={10} color="blue" />      
                  </span>                    
                </li>

              )}
            </ul>

          </div>

      </div>

    )

  }

}


export default App;