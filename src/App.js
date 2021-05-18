import React from "react";
import './App.css'
import Row from "./Row";
import requerst from "./Request";
import Banner from './Banner'
import Navbar from './Navbar'

export default function App() {
  return (
    <>
      <div className="main-container">
        <div className="bennar-navbar" >
          <Navbar/>
          <Banner/>
        </div>
        <div className="rows__container">
          <Row
            tittle="NETFLIX ORIGINAL"
            fetchUrl={requerst.fetchNetflixOriginal}
            isLog={true}
          />
          <Row tittle="Tranding Now" fetchUrl={requerst.fetchTranding} />
          <Row tittle="Top Rated" fetchUrl={requerst.fetchTopRated} />
          <Row tittle="Action Movie" fetchUrl={requerst.fetchActionMovie} />
          <Row tittle="Comedy Movie" fetchUrl={requerst.fetchComedyMovie} />
          <Row tittle="Hororr Movie" fetchUrl={requerst.fetchHororrMovie} />
          <Row tittle="Romantic Movie" fetchUrl={requerst.fetchRomanceMovie} />
          <Row tittle="Documentories" fetchUrl={requerst.fetchDocumentories} />
        </div>
      </div>
    </>
  );
}
