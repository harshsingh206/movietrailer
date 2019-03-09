import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import '../App.css';
import YouTube from 'react-youtube';
import Grid from '@material-ui/core/Grid';
import MovieLanguage from './MovieLanguage'; 
import MovieGenre from './MovieGenre';


const genre = ["Crime","Thriller","Drama","Action","Adventure","Fantasy","Comedy","Horror","Suspense"];
class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {list : props.list, language: props.language};
        this.movieList = this.state.list;
    }

    myCallback = (language) => {
        if(language.length > 0){
            let filterList = this.structureLangauge(language);
            this.getFinalList(filterList);
        }
        else{
            this.setState({list: this.movieList});
        }
    }

    myCallbackGenre = (genre) => {
        if(genre.length > 0){
            let filterList = this.structureLangauge(genre);
            this.getFinalList(filterList);
        }
        else{
            this.setState({list: this.movieList});
        }
    }

    structureLangauge(language){
        let filterList = this.filtersByLanguage(this.movieList, language);
        return filterList;
    }

    getFinalList(filterList){
        let finalList = [];
        if(filterList.length < 1) return;
        finalList = [].concat(...filterList);
        this.setState({list: finalList});
    }

    filtersByGenre(arr, filters){
        var filterList = [];
        for(let i=0; i<filters.length; i++){
         const result = arr.filter(list => list.EventGenre === filters[i]);
         filterList.push(result);
        }  
        return filterList;
}
    
    filtersByLanguage(arr, filters){
            var filterList = [];
            for(let i=0; i<filters.length; i++){
             const result = arr.filter(list => list.EventLanguage === filters[i]);
             filterList.push(result);
            }  
            return filterList;
    }

    playVideo(url){
        var pos,res;
        pos = url.indexOf("&");
        if(pos > 0){
            res = url.slice(32, pos);
        } else{
            res = url.slice(32, url.length);
        }       
        this.setState({ TrailerURL: res});
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    }

    render() {
        const classes = this.props;
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
              autoplay: 1
            }
          };
        return (
            <div>
                <div>
                <MovieLanguage languages={this.state.language} callbackFromParent={this.myCallback}></MovieLanguage>
                <MovieGenre genre={genre} callbackFromParent={this.myCallbackGenre}></MovieGenre>
                </div>
            
            {this.state.TrailerURL ? 
            <div className="movie-trailer">
                <Grid item xs={4}>
                    <YouTube
                            videoId={this.state.TrailerURL}
                            containerClassName="video-container" 
                            opts={opts}
                            onReady={this._onReady}
                        />
                <span>Harsh</span>
                </Grid>
                <Grid item xs={4}>
                    Harsh
                </Grid>
            </div>
                : 
                <span></span>
            }
               {this.state.list.map((post, i) => (
                   <div style={{backgroundColor:"black"}}>
                   <Card className="card" key={post.EventCode} style={{backgroundImage: new URL(`https://in.bmscdn.com/events/moviecard/${post.EventCode}.jpg`)}}>
                    <CardMedia
                        className="card-media"
                        image={`https://in.bmscdn.com/events/moviecard/${post.EventCode}.jpg`}
                        title="Paella dish"
                        />
                        <IconButton className="play-icon" aria-label="Play/pause" onClick={() => this.playVideo(post.TrailerURL)}>
                            <PlayArrowIcon className={classes.playIcon}/>
                        </IconButton>
                    </Card>
                   </div>
               ))}
            </div>
        );
    }
}

export default MovieList;