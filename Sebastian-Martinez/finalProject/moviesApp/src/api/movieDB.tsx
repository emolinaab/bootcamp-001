import axios from "axios";




const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "282050f3612c2b6542b21c83f03ec0ec",
    language: "es-ES",
  },
});

export default movieDB;
