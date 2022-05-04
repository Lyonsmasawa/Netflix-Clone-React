import { useState, useEffect } from "react";
import axios from "./axios";

const Row = ({title, fetchURL}) => {
    const [movies, setMovies] = useState([])

    // a snippet of code which runs based on a specific condition or variable
    useEffect(() => {
      return () => {
        // [] RUN ONes WHEN THE ROW LOADS 
        // [movies] runs every time the movies change
        async function fetchData(){
            const request = await axios.get(fetchURL);
            console.log(request);
            return request;
        }
        fetchData()
      }
    }, [])
    

    return ( 
        <div>
            <h2>{title}</h2>
            {/* {container => poster} */}
        </div>
     );
}
 
export default Row;