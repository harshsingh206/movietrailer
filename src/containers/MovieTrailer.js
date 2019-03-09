import React, { Component } from 'react';
import MovieList from '../components/MovieList';

class MovieTrailer extends Component {
    constructor(props){
        super(props);
        this.state = {list : [], language: []};
    }
    
    componentDidMount() {
        fetch('https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs')
        .then(Response => Response.json())
        .then( data => {
            var trailerList = data[1];
            var list = Object.keys(trailerList).map(function(k) { return trailerList[k] });
            this.setState({ list: list, language:  data[0]})
        })
    }

    render() {
        return (
            <div>
                {this.state.list.length > 0 && (
                    <div>
                        <MovieList list={this.state.list} language={this.state.language}></MovieList>
                    </div>
                )}
            </div>
        );
    }
}


export default MovieTrailer;