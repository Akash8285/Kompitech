import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieService from '../../services/MovieService';

export default class Movies extends Component {

    constructor() {
        super();

        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ movies: MovieService.getMovies() }));
    }

    render() {
        console.log(this.state.movies);
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div>
                        <MovieList movies={this.state.movies} />
                    </div>
                </div>
            </div>
        );
    }
}