import React from 'react'
import  './style.css';


class MovieCard extends React.Component {
    
    constructor (props) {

        super(props);

        this.state = {

            isVisible: false,

        }
    }

    showControls = () =>{ 
        console.log("called")
        if(this.state.isVisible){

        this.setState({isVisible: false })

        }
        else {

        this.setState({isVisible: true })


        }
    }


    
   render() { 
    return <li onMouseOver={this.showControls} onMouseLeave={this.showControls} >
   {this.state.isVisible && <i class="fa fa-heart" aria-hidden="true" onClick={() => this.props.favouriteCallback(this.props.movie)} ></i> }
    <img src={`https://image.tmdb.org/t/p/original${this.props.movie.poster_path}`} alt="movie-logo" />
    <div className="buy-button" > {  <button onClick={() => this.props.addToCart(this.props.movie)} >Buy Now </button>} </div>

    <span>
        <span>{this.props.movie.title}</span>
        <br />
        <span>{this.props.movie.release_date}</span>
        <progress value={this.props.movie.vote_average} max={10} color="blue" />
    </span>
</li>

}

}


export default MovieCard;