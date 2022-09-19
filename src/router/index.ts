import Movie from "../views/Movie.vue";
import MoviesList from "../views/MoviesList.vue";

export default [
  { path: "/", component: Movie },
  { path: "/movie", component: Movie },
  { path: "/movies", component: MoviesList },
];
