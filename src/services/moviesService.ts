import axios from "axios";

export interface Movie {
  director: string;
  id: number;
  production_year: string;
  title: string;
  watch_date: string;
}

export default class MoviesService {
  public static async getMovies(): Promise<Movie[]> {
    const response = await axios.get("http://mateuszpapuga.pl/api/movies");
    console.log(response);
    return response.data;
    // return ["aaa"];
  }
}
