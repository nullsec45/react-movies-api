import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="row mt-3 justify-content-center" >
                <div className="col-md-8">
                    <h1 className="text-center">Search Movie</h1>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Movie title" id="search-input" />
                        <button className="btn btn-primary" type="button" id="search-button">Search</button>
                    </div>
                </div>
            </div>
        )
    }
}
