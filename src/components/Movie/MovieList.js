import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';



class MovieList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            movies:props.movies
        };
        this.getMovies = this.getMovies.bind(this);
        this.filterMovies = this.filterMovies.bind(this);
    }
    UNSAFE_componentWillReceiveProps (movieProps){
        this.setState({movies:movieProps.movies});
    }
    
    getMovies(){
        return (
            <div className="card-deck">
                {
                    this.state.movies.map(movie => <MovieCard key={movie.id} movie={movie} filterMovie={this.filterMovies}/>)
                }
            </div>
        );
    }
    
    filterMovies (id) {
        this.setState({movies:this.state.movies.filter(item => item.id !== id)});
    }
    render(){
        return(
            <div>
                {this.getMovies()}
            </div>
        );
    }
}

MovieList.defaultProps = {
    movies: []
};

MovieList.propTypes = {
    movies: PropTypes.array
};

export default MovieList;
