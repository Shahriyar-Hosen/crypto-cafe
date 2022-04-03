import React, { useEffect, useState } from "react";
import CoinCard from "../CoinCard/CoinCard";
import Spinner from "../Spinner/Spinner";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setSpinner(true);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false%27%20%20-H%20%27accept:%20application/json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setSpinner(false);
      });
  }, []);

  return (
    <>
      {spinner ? (
        <Spinner></Spinner>
      ) : (
        <div className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
          <h1 className="text-center text-3xl font-bold text-gray-700">
            Available Crypto Currencies
          </h1>
          <p className="text-center mb-12 text-xl font-normal text-gray-500">
            Total Coins: {coins.length}
          </p>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {coins.map((coin) => (
              <CoinCard key={coin.id} coin={coin}></CoinCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Coins;
