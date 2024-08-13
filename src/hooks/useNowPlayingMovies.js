import { API_CONST } from "../utilis/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setNewMovies } from "../utilis/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlaying = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_CONST
    );
    const data = await response.json();
    dispatch(setNewMovies(data.results));

    //console.log(data);
  };
  useEffect(() => {
    nowPlaying();
  }, []);
};
export default useNowPlayingMovies;
