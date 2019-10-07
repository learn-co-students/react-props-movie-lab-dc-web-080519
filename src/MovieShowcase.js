import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // console.log(movieData)
    return movieData.map((m, index) =>
      <MovieCard key={index} title={m.title} IMDBRating={m.IMDBRating} genres={m.genres} poster={m.poster}/>)
    }
    //   {
    //   console.log(data)
    //     return <MovieCard
    //     title={data.title}
    //     IMDBRating={data.IMDBRating}
    //     genres={data.genres}
    //     poster={data.poster} />
    // }
  // )
    // map over your movieData array and return the correct


  render() {
    return (

      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
