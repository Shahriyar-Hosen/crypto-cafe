import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  const { name, image, symbol } = coin;
  return (
    <div className="shadow-lg rounded-2xl w-[250px] bg-white p-4">
      <Link to={"/coins"}>
        <div className="flex gap-4 justify-between items-center">
          <div className="flex-shrink-0">
            <img
              className="mx-auto object-cover rounded-full w-16 h-16"
              src={image}
              alt="Coin images"
            />
          </div>
          <div className="flex flex-col justify-end">
            <span className="text-gray-600 font-medium">{name}</span>
            <span className="text-gray-400 font-xs">{symbol}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoinCard;
