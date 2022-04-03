import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const [coin, setCoin] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoin(data));
  }, [id]);
  const {
    name,
    image,
    coingecko_rank,
    country_origin,
    last_updated,
    hashing_algorithm,
    genesis_date,
    community_score,
    developer_score,
    liquidity_score,
    public_interest_score,
  } = coin;
  return (
    <div className=" px-4 h-[70vh] pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <div className="h-full grid grid-cols-1 md:grid-cols-2 justify-center content-center gap-4">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl">General Info</h1>
          <hr />
          <h1>Coin Name: {name}</h1>
          <h1>Market Cap Rank: {coingecko_rank}</h1>
          <h1>Origin: {country_origin ? country_origin : "Not Available"} </h1>
          <h1>Contract Address: Hashing</h1>
          <h1>Algorithm: {hashing_algorithm}</h1>
          <h1>Genesis Date: {genesis_date}</h1>
          <h1>Last Updated: {last_updated}</h1>

          <h1 className="text-3xl mt-4">Score:</h1>
          <hr />
          <h1>Community Score: {community_score}</h1>
          <h1>Developer Score: {developer_score}</h1>
          <h1>Liquidity Score: {liquidity_score}</h1>
          <h1>Public Interest Score: {public_interest_score}</h1>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2">
          <img src={image?.large} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
