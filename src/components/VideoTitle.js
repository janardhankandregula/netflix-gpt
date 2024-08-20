import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div>
      <h1 className="md:text-6xl md:font-bold md:w-2/4 text-lg font-bold w-1/4">
        {title}
      </h1>
      <p className="md:py-6 md:text-lg md:w-1/4 py-2 text-xs w-3/4">
        {overview}
      </p>
      <div>
        <button className="bg-white text-black p-1 px-3  text-sm md:p-3 md:px-12 md:text-lg rounded-lg hover:opacity-80">
          <i class="fas fa-play"></i> Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-1 px-3  text-sm md:p-3 md:px-12 md:text-lg  bg-opacity-50 rounded-lg">
          <i class="fas fa-info-circle icon-bordered"></i> More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
