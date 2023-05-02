import React, { Component } from 'react'

export default class MovieList extends Component {
    render() {
        return (
            <div class="row mt-4" id="movie-list">
                <div class="col-md-4">
                    <div class="card mb-3">
                        <img src="" class="card-img-top img-fluid" alt="" />
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <h6 class="card-subtitle mb-2 text-muted"></h6>
                            <a href="#" class="btn btn-primary see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.imdbID}">See Detail</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

