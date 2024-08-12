import { API_CONST } from "../utilis/constants";

import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const nowPlaying = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_CONST
    );
    const data = await response.json();

    console.log(data);
  };
  useEffect(() => {
    nowPlaying();
  }, []);
};
export default useNowPlayingMovies;
