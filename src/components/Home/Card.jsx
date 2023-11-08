import React from "react";

const Card = ({ photo, heading, detail}) => {
  return (
    <div className=" w-[37rem] h-[16rem] flex flex-col items-center text-center bg-red-200 rounded-lg border-solid border-2 border-rouge shadow-lg hover:shadow-rouge">
      <div>
        <img className="w-[37rem] h-[11rem]" src={photo} alt="" />
      </div>
      <div className="w-[37rem] flex flex-col text-left ml-6 text-[1.5rem]">
        <span className=" font-bold">{heading}</span>
        <span>{detail}</span>
      </div>
      
      
    </div>
  );
};

export default Card;
