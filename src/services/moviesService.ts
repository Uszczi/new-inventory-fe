import axios from "axios";

export interface Movie {
  directors: string;
  id: number;
  production_year: string;
  title: string;
  watch_date: string;
}

export default class MoviesService {
  public static async getMovies(): Promise<Movie[]> {
    const response = await axios.get("http://localhost:8000/api/movies");
    // const response = await axios.get("https://mateuszpapuga.pl/api/movies");
    return response.data;
  }
}
