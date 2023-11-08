import React from "react";
import { FcLike, FcRating } from 'react-icons/fc'

const Card = ({heading, detail}) => {
  return (
    <div className="w-[10rem] h-[6rem] flex flex-wrap items-center content-center text-center bg-red-200 rounded-lg border-solid border-2 border-rouge shadow-lg hover:shadow-rouge">
      <div className=""><FcLike size={70}/></div>
      <div className="flex flex-col text-center text-[1rem]">
        <span className=" font-bold">{heading}</span>
        <span>{detail}</span>
      </div>
      
      
    </div>
  );
};

export default Card;
