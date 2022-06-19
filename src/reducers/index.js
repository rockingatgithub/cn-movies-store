const initialState = {
    favouriteList: [],
    cartItems: [],
    moviesList: [],
}



function rootReducer (  state = initialState,  action  ){

    switch (action.type) {
        case "ADD_TO_FAV":
            console.log(action);
            return {
                ...state,
                favouriteList: [ ...state.favouriteList, action.data.movie  ]
            };
        case "REMOVE_TO_FAV":

            let newFavouritesList = state.favouriteList.filter((curMovie) => curMovie.id !== action.data.movie.id);
            console.log(action)
            return {
                ...state,
                favouriteList: [ ...newFavouritesList  ]
            };


            case "ADD_TO_CART":
            console.log(action);
            return {
                ...state,
                cartItems : [ ...state.cartItems, action.data.movie  ]
            };


            case "GET_MOVIES":
            console.log(action);
            return {
                ...state,
                moviesList : [  ...action.data.moviesList  ]
            };
            
    
        default:
            return {
                ...state
            };
    }

}


export default rootReducer