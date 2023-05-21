import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        const { handleSubmit, title, changeTitle } = this.props;

        return (
            <div className="row mt-3 justify-content-center" >
                <div className="col-md-8">
                    <h1 className="text-center">Search Movie</h1>
                    <form action="">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Movie title" id="search-input" value={title} onChange={(event) => changeTitle(event)} />
                            <button className="btn btn-primary" type="submit" id="search-button" onClick={handleSubmit}>Search</button>

                        </div>
                    </form>
                </div>
            </div >
        )
    }
}
