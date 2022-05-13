import movieTrailer from "movie-trailer";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css";

const Row = ({title, fetchURL, isLargeRow}) => {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");

    // a snippet of code which runs based on a specific condition or variable
    useEffect(() => {
      return () => {
        // [] RUN ONes WHEN THE ROW LOADS 
        // [movies] runs every time the movies change
        async function fetchData(){
            const request = await axios.get(fetchURL);
            console.log(`${request} + this happened`);
            // console.table(request.data.results);
            setMovies(request.data.results)
            return request;
        }
        fetchData()
      }
    }, [fetchURL]);

    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        if (trailerURL) {
            setTrailerURL("");
        } else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                // https://www.youtube.com/watch?v=tQ0yjYUFKAE
                const urlParams = new URLSearchParams(new URL(url).search); //picks the v=tQ0yjYUFKAE part which is the search
                setTrailerURL(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    }
    

    return ( 
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/* several row__poster(S) */}
                {movies.map( movie => (
                    <img 
                    key={movie.id}
                    onClick={ () => handleClick(movie)}
                    // this key optimizes react so that if something changes in the row react doesn't actually rerender the whole row, it just re renders what is supposed to be rerendered thus makes it faster
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ) )}
            </div>
            { trailerURL && <YouTube videoId={trailerURL} opt={opts} />}
        </div>
     );
}
 
export default Row;