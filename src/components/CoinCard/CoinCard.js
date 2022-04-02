import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  const { name, image } = coin;
  return (
    <div className="shadow-lg rounded-2x w-[250px] bg-white p-4">
      <Link to={"/coins"}>
        <div className="flex gap-4 justify-between items-center">
          <div className="flex-shrink-0">
            <img src={image} alt="Coin images" />
          </div>
          <div className="flex flex-col justify-end">
            <span className="text-gray-600 font-medium">{name}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoinCard;
