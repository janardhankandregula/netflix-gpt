import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const allMovies = useSelector((state) => state?.movie?.newMovies);

  const mainMovies = allMovies?.[0];
  if (mainMovies === undefined) {
    return;
  }

  const { original_title, overview, id } = mainMovies;
  return (
    <div>
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
