import { hover } from "@testing-library/user-event/dist/hover";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import { useDispatch } from "react-redux";
import { API_CONST } from "../utilis/constants";
import { setHoverVideo } from "../utilis/hoverslice";

const TrailerContainer = ({ test, mveTitle, rat }) => {
  const hoverstate = useSelector((state) => state?.hover?.hoverToggle);
  const hoverVideo = useSelector((state) => state?.hover?.hoverVideo?.key);
  const dispatch = useDispatch();

  // const TrailerVideo = async (test) => {
  //   const response = await fetch(
  //     `https://api.themoviedb.org/3/movie/${test}/videos?language=en-US`,
  //     API_CONST
  //   );
  //   const data = await response?.json();

  //   if (!data || !data.results) {
  //     console.error("No data or results found.");
  //     return;
  //   }

  //   const filterdata = data?.results?.filter(
  //     (video) => video?.type === "Trailer"
  //   );
  //   const trailer = filterdata?.length ? filterdata[0] : data.json[0];

  //   dispatch(setHoverVideo(trailer));
  // };

  const TrailerVideo = async (test) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${test}/videos?language=en-US`,
        API_CONST
      );
      const data = await response.json();

      if (!data || !data.results) {
        console.error("No data or results found.");
        return;
      }

      const filterdata = data.results.filter(
        (video) => video.type === "Trailer"
      );

      if (filterdata.length === 0) {
        console.error("No trailers found.");
        return;
      }

      const trailer = filterdata[0]; // Directly use the first trailer
      dispatch(setHoverVideo(trailer));
    } catch (error) {
      console.error("Error fetching trailer data:", error);
    }
  };
  TrailerVideo(test);
  return (
    <div className="relative w-full max-w-4xl h-auto border-2 white rounded-2xl">
      <iframe
        className="w-full aspect-video rounded-2xl"
        src={`https://www.youtube.com/embed/${hoverVideo}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex flex-col space-y-2 rounded-2xl">
        <h2 className="text-xl font-semibold">
          Movie name : <span style={{ fontWeight: "bold" }}>{mveTitle}</span>
        </h2>
        <h2 className="text-lg">
          Rating :<span style={{ fontWeight: "bold" }}>{rat}</span>
        </h2>
      </div>
    </div>
  );
};

export default TrailerContainer;
