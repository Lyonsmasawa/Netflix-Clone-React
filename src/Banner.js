import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from "./axios";
import requests from './requests';

function Banner() {
    const [movie, setMovie] = useState([]);
    const image_url = "https://image.tmdb.org/t/p/original/";
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

  return (
    <header className='banner' style = {{
        backgroundSize: "cover",
        backgroundImage: `url("${image_url}${movie?.backdrop_path}")`,
        // the ? mark is if there is no movie to handle it elegantly 
        backgroundPosition: "center center",
    }}>
        <div className="banner__contents">
            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner__buttons">
                <button className="banner__button">
                Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h1 className="banner_description">
                {movie.overview}
            </h1>
        </div>
    </header>
    )
}

export default Banner