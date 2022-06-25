
export const getMoviesList = () => {

  return async (dispatch, getState) => {

    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e08d15260b80f4fba575a381012e7ce8&language=en-US&page=1`);
    let parsedResponse = await response.json();
    dispatch(setMoviesList(parsedResponse))
    }

}

export const setMoviesList = (parsedResponse) => {

  return ({
    type: "GET_MOVIES",
    data: {
      moviesList: [ ...parsedResponse.results  ]
    }
  })

}


export const addToFavourites = (movie) =>({

  type: "ADD_TO_FAV",
  data: {
    movie
  }

})


export const removeFromFavourite = (movie) => {

  console.log("movie", movie);
  let obj = {

    type: "REMOVE_TO_FAV",
    data: {
      movie
    }

  }
  return  obj;

}


export const addToCart = (movie) =>({

  type: "ADD_TO_CART",
  data: {
    movie
  }

})


export const removeFromCart = (movie) => {

  console.log("movie", movie);
  let obj = {

    type: "REMOVE_FROM_CART",
    data: {
      movie
    }

  }
  return  obj;

}