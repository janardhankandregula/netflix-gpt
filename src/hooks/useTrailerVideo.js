import { useDispatch, useSelector } from "react-redux";
import { API_CONST } from "../utilis/constants";
import { setTrailer } from "../utilis/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  //const [key, setKey] = useState(null);
  const movieTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_CONST
    );
    const data = await response.json();

    //console.log(data);
    const filterdata = data.results.filter((video) => video.type === "Trailer");
    const trailer = filterdata.length ? filterdata[0] : data.json[0];
    dispatch(setTrailer(trailer));

    //setKey(trailer.key);
  };
  useEffect(() => {
    movieTrailer();
  }, []);
};

export default useTrailerVideo;
