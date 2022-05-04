import { useState, useEffect } from "react";
import axios from "./axios";

const Row = ({title, fetchURL}) => {
    const [movies, setMovies] = useState([])

    // a snippet of code which runs based on a specific condition or variable
    useEffect(() => {
      return () => {
        // [] RUNONCE WHEN THE ROW LOADS 
        // [movies] runs everytime the movies change
        async function fetchData(){
            const request = await axios.get(fetchURL)
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