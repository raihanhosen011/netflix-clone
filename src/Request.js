const APIKEY = 'fa608887ffadde2c94bc5419f546ee57' ;

const requerst = {
    fetchTranding : `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginal : `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated :`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovie:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovie:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHororrMovie:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovie:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentories:`/discover/movie?api_key=${APIKEY}&with_genres=99`,
}

export default requerst