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

    // console.log(movie);
    function truncate(str, n) {
        return str?.length > n? str.substr(0, n-1) + "..." : str;
    }

  return (
    <header className='banner' style = {{
        backgroundSize: "cover",
        backgroundImage: `url("${image_url}${movie?.backdrop_path}")`,
        // the ? mark is if there is no movie to handle it elegantly 
        backgroundPosition: "center center",
    }}>
        <div className="banner__contents">
            <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner__buttons">
                <button className="banner__button">
                Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">
                {truncate(movie?.overview, 200)}
            </h1>
        </div>

        <div className="banner__fadeBottom">th</div>
    </header>
    )
}

export default Banner