import React, { Component, useEffect, useState } from 'react'
import { Navbar } from "../components";
import API_URL from "../utils/constant";
import { useParams } from 'react-router-dom';
import axios from "axios";

const Detail = () => {
    let { id } = useParams();
    const [movie, setMovie] = useState({})

    useEffect(() => {
        getMovie(id)
        localStorage.setItem("detail", true)
    }, []);

    const getMovie = (id) => {
        axios.get(API_URL, {
            params: {
                apikey: '438f2b3f',
                i: id
            }
        }).then(res => {
            return res.data
        }).then(res => {
            setMovie(res)
        }).catch(error => {
            // handle error
            alert(`Error Message : ${error}`);
        });
    }


    const { Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster } = movie;


    return (
        <>
            <Navbar />
            <div className="row mt-4">
                <div className="container pb-5">
                    <div className="card">
                        <div className="card-header">
                            <h3>Movie Detail</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={Poster} alt="" />
                                </div>
                                <div className="col-md-8 ml-5">
                                    <ul className="list-group">
                                        <li className="list-group-item"><h3>{Title}</h3></li>
                                        <li className="list-group-item">Year  : {Year}</li>
                                        <li className="list-group-item">Rated : {Rated}</li>
                                        <li className="list-group-item">Released : {Released}</li>
                                        <li className="list-group-item">Runtime : {Runtime}</li>
                                        <li className="list-group-item">Genre : {Genre}</li>
                                        <li className="list-group-item">Director : {Director}</li>
                                        <li className="list-group-item">Writer : {Writer}</li>
                                        <li className="list-group-item">Actors : {Actors}</li>
                                        <li className="list-group-item">Plot : {Plot}</li>
                                        <li className="list-group-item">Language : {Language}</li>
                                        <li className="list-group-item">Country : {Country}</li>
                                        <li className="list-group-item">Awards : {Awards}</li>
                                    </ul>
                                </div>
                            </div>
                            <a href="/" className="btn btn-primary mt-3">Back</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail