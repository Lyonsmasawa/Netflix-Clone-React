import { useState } from "react";

const Row = ({title}) => {
    const [movies, setMovies] = useState([])

    return ( 
        <div>
            <h2>{title}</h2>
            {/* {container => poster} */}
        </div>
     );
}
 
export default Row;