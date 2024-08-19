import React, { useEffect, useRef, useState } from "react";
import { bgImage } from "../utilis/constants";
import { useDispatch, useSelector } from "react-redux";
import client from "../utilis/openAi";
import { setMovieData, removeMoieData } from "../utilis/movieSlice";
import GptMovies from "./GptMovies";

const Gpt = () => {
  const [movieResult, setMovieResult] = useState([
    // "Andaz Apna Apna",
    // "Hera Pheri",
    // "Chupke Chupke",
    // "Jaane Bhi Do Yaaro",
    // "Padosan",
  ]);
  const dispatch = useDispatch();

  //const removeDispatch = useDispatch();
  const language = useSelector((state) => state.user.language);
  const inputData = useRef(null);

  // console.log(inputData?.current?.value);
  const placeholders = {
    English: "Please enter your search",
    Telugu: "దయచేసి మీ శోధనను నమోదు చేయండి",
    Hindi: "कृपया अपनी खोज दर्ज करें",
  };

  const buttonLabels = {
    English: "Submit",
    Telugu: "సమర్పించు",
    Hindi: "जमा करना",
  };
  const handleGpt = async (e) => {
    // const movieResult = [
    //   "Andaz Apna Apna",
    //   "Hera Pheri",
    //   "Chupke Chupke",
    //   "Jaane Bhi Do Yaaro",
    //   "Padosan",
    // ];
    e.preventDefault();
    //dispatch(removeMoieData());
    //removeMoieData();
    const inputText = inputData?.current?.value;
    if (inputText) {
      // setMovieResult((prevList) => [inputText, ...prevList]);
      inputData.current.value = "";
      setMovieResult([inputText]);
    }
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhjOTQ5YTc3ODU3ZTc3MzZhMzI1MDhiMzFhMWEzZCIsIm5iZiI6MTcyMzYyOTAzMC4zMzI4NjEsInN1YiI6IjY2Yjk5MTNmMzUzYjQyNmNjMTVmNmJjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KOPLyNONJzOpAMrTPsPwZxM79Hw-jYDptAbYTYbX5OE",
      },
    };
    try {
      const fetchPromises = movieResult.map((movie) =>
        fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            movie
          )}`,
          options
        )
      );
      const responses = await Promise.all(fetchPromises);
      const results = await Promise.all(
        responses.map((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
      );
      dispatch(setMovieData(results));
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  // handleGpt();
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0 ">
        <img src={bgImage} alt="Des" className="fixed" />
      </div>
      <div className="absolute z-10 p-4 w-full flex justify-center top-20">
        <form onSubmit={handleGpt}>
          <input
            ref={inputData}
            type="text"
            placeholder={placeholders[language] || "Please enter your search"}
            className="w-96 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-auto bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-4"
            // onClick={handleGpt}
          >
            {buttonLabels[language] || "Submit"}
          </button>
        </form>
      </div>
      <div>
        <GptMovies />
      </div>
    </div>
  );
};

export default Gpt;
