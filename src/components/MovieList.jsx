import React, { Component } from 'react'

export default class MovieList extends Component {
    render() {
        const { movies } = this.props;
        return (
            <>
                <div className="row mt-4" id="movie-list" >
                    {movies && movies.map((movie) => (
                        <div className="col-md-4" key={movie.imdbID}>
                            <div className="card mb-3">
                                <img src={movie.Poster} className="card-img-top img-fluid" alt={movie.Title} />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.Title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{movie.Year}</h6>
                                    <a href={`/detail/${movie.imdbID}`} className="btn btn-primary see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.imdbID}">See Detail</a>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div >
            </>
        )
    }
}

