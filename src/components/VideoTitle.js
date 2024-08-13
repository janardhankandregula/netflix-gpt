import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full aspect-video pt-[15%] px-[8%] text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold w-2/4">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-3 px-12 text-lg rounded-lg hover:opacity-80">
          <i class="fas fa-play"></i> Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-3 px-12 text-lg bg-opacity-50 rounded-lg">
          <i class="fas fa-info-circle icon-bordered"></i> More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
