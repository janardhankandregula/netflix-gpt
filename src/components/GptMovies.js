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

  const results = Array.isArray(gptMovies)
    ? gptMovies.map((item) => item.results)
    : [];

  const flattenedResults = results.flat();
  const validResults = flattenedResults.filter((item) => item.poster_path);
  return validResults ? (
    <div className="grid grid-cols-6 space-x-10 p-4 ml-2 mr-2 mb-4 pb-2 pt-10 gap-8 relative top-52 bg-black bg-opacity-60">
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
          <div className="absolute bg-black text-white top-28 right-28 w-auto h-auto p-4 rounded-lg shadow-lg">
            <TrailerContainer test={id} mveTitle={title} rat={rating} />
          </div>
        )}
      </>
    </div>
  ) : (
    ""
  );
};

export default GptMovies;
