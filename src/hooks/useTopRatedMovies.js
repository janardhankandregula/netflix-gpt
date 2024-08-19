import { useDispatch } from "react-redux";
import { API_CONST } from "../utilis/constants";
import { setTopRatedMovies } from "../utilis/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhjOTQ5YTc3ODU3ZTc3MzZhMzI1MDhiMzFhMWEzZCIsIm5iZiI6MTcyMzYyOTAzMC4zMzI4NjEsInN1YiI6IjY2Yjk5MTNmMzUzYjQyNmNjMTVmNmJjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KOPLyNONJzOpAMrTPsPwZxM79Hw-jYDptAbYTYbX5OE",
    },
  };
  const dispatch = useDispatch();
  const popular = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const data = await response.json();

    dispatch(setTopRatedMovies(data.results));
  };
  useEffect(() => {
    popular();
  }, []);
};
export default useTopRatedMovies;
