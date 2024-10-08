import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import Header from "./Header";

const MainContainer = () => {
  const allMovies = useSelector((state) => state?.movie?.newMovies);

  const mainMovies = allMovies?.[0];
  if (mainMovies === undefined) {
    return;
  }

  const { original_title, overview, id } = mainMovies;
  return (
    <div className="relative">
      <VideoBackground movieId={id} />
      <div className="absolute md:top-0 md:left-0 md:py-[11.5%] md:px-32 top-0 left-0 py-[25%] px-3 text-white bg-gradient-to-r from-black">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
