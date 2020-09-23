import React, { Component } from 'react'
export class Movie extends Component {
  state = {
    movies: [],
  }
  async componentDidMount() {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=e2491dbfebc8bc34967b24ea37c22a92'
    )
    const apiJSON = await response.json()
    console.log(apiJSON.data)
    this.setState({ movies: apiJSON.results })
  }
  render() {
    return (
      <div>
        <main>
          <header>PARTY LIKE ITS 1989</header>
          {this.state.movies.map(movie => (
            <>
              <h1 data-text={`${movie.title}`}>{movie.title}</h1>
              <section>
                <img
                  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                />
              </section>

              <p>{movie.overview}</p>
            </>
          ))}
        </main>
      </div>
    )
  }
}
