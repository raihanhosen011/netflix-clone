import React, { useEffect, useState } from "react";
import axios from "axios";
import requerst from "./Request";

const base_url = 'https://image.tmdb.org/t/p/original'

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const rquest = await axios.get(
        `https://api.themoviedb.org/3${requerst.fetchNetflixOriginal}`
      );
      setMovie(rquest.data.results[Math.floor(Math.random() * rquest.data.results.length - 1)]);
    }
    fetchData();
  }, []);

  return (
    <>
      <header className="bennar_container" style={{
          background : `linear-gradient(#00000000,#292929),url(${base_url}${movie?.backdrop_path})`,
      }}>
        <div className="bennar-contains">
          <h2>{movie?.name || movie?.title || movie?.original_name}</h2>
          <div className="bennar-btns">
            <button>Play</button>
            <button>My List</button>
          </div>
          <div className="dennar-description">
            <p>{movie?.overview}</p>
          </div>
        </div>
      </header>
    </>
  );
}
