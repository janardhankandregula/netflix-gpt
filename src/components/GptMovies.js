import React from "react";
import { useSelector } from "react-redux";
import MovieCards from "./MovieCards";
import { renderToStaticMarkup } from "react-dom/server";
import TrailerContainer from "./TrailerContainer";

const GptMovies = () => {
  const gptMovies = useSelector((store) => store?.movie?.movieData);
  const hoverState = useSelector((state) => state?.hover?.hoverToggle);
  const id = useSelector((state) => state?.hover?.hoverid);
  const title = useSelector((state) => state?.hover?.hoverTitle);
  const rating = useSelector((state) => state?.hover?.hoverRating);
  const movieData = useSelector((state) => state.movie.movieData);

  const results = Array.isArray(gptMovies)
    ? gptMovies.map((item) => item.results)
    : [];

  const flattenedResults = results.flat();
  const validResults = flattenedResults.filter((item) => item.poster_path);
  return validResults
    ? movieData && (
        <div className="grid grid-cols-2 space-x-4 p-2 ml-0  mr-5 mb-2 pb-1 pt-5 gap-4 relative top-52 bg-black bg-opacity-60 md:grid-cols-6 md:space-x-10 md:p-4 md:ml-2 md:mr-16 md:mb-4 md:pb-2 md:pt-10 md:gap-8">
          <>
            {validResults.map((item, index) => (
              <MovieCards
                key={index}
                path={item.poster_path}
                title={item?.original_title}
                rating={item?.vote_average}
                id={item?.id}
              />
            ))}
            {hoverState && (
              <div className="absolute bg-black text-white md:top-28 md:right-28 md:w-auto md:h-auto md:p-4 rounded-lg shadow-lg top:0 right:2 w-auto h-auto p-2">
                <TrailerContainer test={id} mveTitle={title} rat={rating} />
              </div>
            )}
          </>
        </div>
      )
    : "";
};

export default GptMovies;
