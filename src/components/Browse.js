import React from "react";

import Header from "./Header";
import Gpt from "./Gpt";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  const gptToggle = useSelector((store) => store.gpt.gptToggle);
  //console.log(gptToggle.gptToggle);

  return (
    <div className="relative">
      <div className="absolute z-20 w-full">
        <Header />
      </div>

      {gptToggle ? (
        <>
          <div>
            <MainContainer />
          </div>
          <div>
            <SecondaryContainer />
          </div>
        </>
      ) : (
        <div>
          <Gpt />
        </div>
      )}
    </div>
  );
};

export default Browse;
