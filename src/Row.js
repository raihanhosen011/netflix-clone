import React, { useEffect, useState } from "react";
import axios from "axios";
import './Row.css'

const base_url = 'https://image.tmdb.org/t/p/original'

export default function Row({ tittle, fetchUrl,isLog }) {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    async function name() {
      const requests = await axios.get(`https://api.themoviedb.org/3${fetchUrl}`)
      setMovie(requests.data.results)
    }
    name()
  }, [fetchUrl])

  return (
    <>
      <div className="row-container">
        <h2>{tittle}</h2>
        <div className="row_posters" >
          {movies.map(ele =>
            <img
               key={ele.id} 
               className="row_poster" 
               src={`${base_url}${isLog ? ele.poster_path : ele.backdrop_path}`} 
               alt={ele.name} />
          )}
        </div>
      </div>
    </>
  );
}