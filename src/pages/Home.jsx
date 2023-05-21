import React, { Component } from 'react'
import API_URL from "../utils/constant";
import { Navbar, Search, MovieList } from "../components";
import axios from 'axios';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            status: "",
            movies: [],
            click: false
        }
    }
    detail = localStorage.getItem("detail");
    componentDidMount() {
        if (this.detail) {
            if (this.state.title) {
                this.searchMovies(this.state.title)
            } else {
                let title = localStorage.getItem("title") ? localStorage.getItem("title") : this.state.title
                this.setState({ title })
                this.searchMovies(title);
            }
        }
        localStorage.removeItem("detail")
    }


    changeTitle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    changeMovies = (movies) => {
        this.setState({ movies: movies });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let title = this.state.title
        this.searchMovies(title)
    }

    searchMovies = (title) => {
        if (title) {
            axios.get(API_URL, {
                params: {
                    s: title,
                    apikey: '438f2b3f',
                }
            }).then(res => {
                return res.data
            }).then(res => {
                let status = res.Response;
                this.setState({
                    status: status
                })
                if (status == "True") {
                    this.changeMovies(res.Search);
                    localStorage.setItem("title", this.state.title);
                } else {
                    alert(res.Error);
                    localStorage.removeItem("title");
                }
            }).catch(error => {
                // handle error
                alert(`Error Message : ${error}`);
                localStorage.removeItem("title");
            });
        }
    }

    render() {
        const { title, status, movies } = this.state;

        return (
            <>
                <Navbar />
                <div className='container'>
                    <Search handleSubmit={this.handleSubmit} title={title} changeTitle={this.changeTitle} />
                    <hr />
                    {(status == "True") ? <MovieList movies={movies} title={title} searchMovies={this.searchMovies} /> : ""}
                </div>
            </>
        )
    }
}

