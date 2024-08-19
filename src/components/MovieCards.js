import React from "react";
import { img_path } from "../utilis/constants";
import TrailerContainer from "./TrailerContainer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteHoverId,
  hoverFalse,
  sethoverId,
  setHoverTitle,
  sethoverToggle,
  setHoverRating,
} from "../utilis/hoverslice";

const MovieCards = ({ path, title, rating, id }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="relative flex-shrink-0 w-40 h-60 overflow-hidden rounded-lg bg-gray-900 transition-transform transform hover:scale-105"
      onMouseEnter={() => {
        dispatch(sethoverToggle());
        dispatch(sethoverId(id));
        dispatch(setHoverTitle(title));
        dispatch(setHoverRating(rating));
      }}
      onMouseLeave={() => {
        dispatch(hoverFalse());
        dispatch(deleteHoverId());
      }}
    >
      <img src={img_path + path} alt="card_image" />

      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex items-end p-2 ">
        <div className="text-white text-sm font-bold">{title}</div>
        <div className="text-yellow-400 text-xs">{rating}</div>
      </div>
    </div>
  );
};

export default MovieCards;
