import React, { useEffect } from "react";
import { API_CONST } from "../utilis/constants";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrailer, videoTrailer } from "../utilis/movieSlice";
import useTrailerVideo from "../hooks/useTrailerVideo";
import Header from "./Header";

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);
  const video = useSelector((store) => store.movie.videoTrailer);
  // console.log(video.key);

  return (
    <div>
      <iframe
        className=" absolute w-full aspect-video"
        src={
          "https://www.youtube.com/embed/Idh8n5XuYIA?" +
          video?.key +
          "&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
