import React from "react";
import MovieCards from "./MovieCards";
import usePopularMovies from "../hooks/usePopularMovies";
import { useDispatch, useSelector } from "react-redux";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import TrailerContainer from "./TrailerContainer";
import { setHoverTitle } from "../utilis/hoverslice";

const MovieContainer = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  const newMovies = useSelector((store) => store?.movie?.newMovies);
  const popularMovies = useSelector((store) => store?.movie?.popularMovies);
  const TopRatedMovies = useSelector(
    (store) => store?.movie?.TopRatedMoviesMovies
  );
  const upComingMovies = useSelector((store) => store?.movie?.upComingMovies);
  const hoverStete = useSelector((state) => state?.hover?.hoverToggle);
  const id = useSelector((state) => state?.hover?.hoverid);
  const title = useSelector((state) => state?.hover?.hoverTitle);
  const rating = useSelector((state) => state?.hover?.hoverRating);
  return (
    <div className="relative bg-black">
      <div className="flex overflow-hidden space-x-10 p-4 ml-4 mr-4 mb-4 relative -top-40">
        {newMovies?.map((movieImg) => {
          console.log(movieImg);
          return (
            <MovieCards
              path={movieImg?.poster_path}
              title={movieImg?.original_title}
              rating={movieImg?.vote_average}
              id={movieImg?.id}
            />
          );
        })}
      </div>
      <div className="relative">
        <div className="flex overflow-hidden space-x-10 p-4 m-4 -mt-36">
          {popularMovies?.map((movieImg) => {
            return (
              <MovieCards
                path={movieImg?.poster_path}
                title={movieImg?.original_title}
                rating={movieImg?.vote_average}
                id={movieImg?.id}
              />
            );
          })}
        </div>
        <div className="flex overflow-hidden space-x-10 p-4  m-4">
          {TopRatedMovies?.map((movieImg) => {
            return (
              <MovieCards
                path={movieImg?.poster_path}
                title={movieImg?.original_title}
                rating={movieImg?.vote_average}
                id={movieImg?.id}
              />
            );
          })}
        </div>
        <div className="flex overflow-hidden space-x-10 p-4 m-4">
          {upComingMovies?.map((movieImg) => {
            return (
              <MovieCards
                path={movieImg?.poster_path}
                title={movieImg?.original_title}
                rating={movieImg?.vote_average}
                id={movieImg?.id}
              />
            );
          })}
        </div>
      </div>
      {hoverStete && (
        <div className="absolute bg-black text-white top-28 right-28 w-auto h-auto">
          <TrailerContainer test={id} mveTitle={title} rat={rating} />
        </div>
      )}
    </div>
  );
};

export default MovieContainer;
