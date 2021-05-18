import axios from 'axios'

const Instants = axios.create({
   baseURL : 'https://api.themoviedb.org/3/'
})

export default Instants