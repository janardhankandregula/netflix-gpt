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
      <div className="flex overflow-x-auto p-2 ml-2 mr-2 mb-2 md:space-x-10 md:p-4 md:ml-4 md:mr-4 md:mb-4 relative md:-top-40 space-x-4 md:mt-20">
        {newMovies?.map((movieImg) => {
          console.log(movieImg);
          return (
            <MovieCards
              path={movieImg?.poster_path}
              title={movieImg?.original_title}
              rating={movieImg?.vote_average}
              id={movieImg?.id}
              className="w-24 md:w-40 md:h-auto h-auto"
            />
          );
        })}
      </div>
      {/* <div className="relative top-10 h-auto"> */}
      {/* <div>
        <div className="flex overflow-x-auto md:space-x-10 md:p-4 md:m-4 md:-mt-44 space-x-4 p-2 ml-2 mr-2 mb-2 h-auto -top-40"> */}

      <div className="overflow-x-auto p-2 ml-2 mr-2  md:p-4 md:ml-4 md:mr-4 md:mb-4 md:-mt-44">
        <div className="flex space-x-4 md:space-x-6 mt-0">
          {popularMovies?.map((movieImg) => (
            <MovieCards
              path={movieImg?.poster_path}
              title={movieImg?.original_title}
              rating={movieImg?.vote_average}
              id={movieImg?.id}
              className="w-24 md:w-40 md:h-auto h-auto"
            />
          ))}
        </div>
      </div>

      {/* <div className="flex overflow-x-auto  space-x-10 p-4  m-4">
        {TopRatedMovies?.map((movieImg) => {
          return (
            <MovieCards
              path={movieImg?.poster_path}
              title={movieImg?.original_title}
              rating={movieImg?.vote_average}
              id={movieImg?.id}
              className="w-32 md:w-40 md:h-auto h-auto"
            />
          );
        })}
      </div> */}
      {/* <div className="flex overflow-x-auto  md:space-x-10 md:p-4 md:m-4 space-x-4 p-2 m-2"> */}
      <div className="overflow-x-auto p-2 ml-2 mr-2 md:space-x-10 md:p-4 md:m-4">
        <div className="flex space-x-4 md:space-x-6">
          {upComingMovies?.map((movieImg) => {
            return (
              <MovieCards
                path={movieImg?.poster_path}
                title={movieImg?.original_title}
                rating={movieImg?.vote_average}
                id={movieImg?.id}
                className="w-24 md:w-40 md:h-auto h-auto"
              />
            );
          })}
        </div>
      </div>

      {/* </div> */}
      {/* {hoverStete && (
        <div className="absolute bg-black text-white top-28 right-28 w-auto h-auto">
          <TrailerContainer test={id} mveTitle={title} rat={rating} />
        </div>
      )} */}
    </div>
  );
};

export default MovieContainer;
