import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between">
      <div className="hidden md:block">
        <h1 className="font-sans font-bold text-xl  text-gray-600"><Link to='/'>Crypto Cafe</Link></h1>
      </div>
      <div className="flex gap-4 text-xl">
          <Link to='/home'>Home</Link>
          <Link to='/coins'>Coins</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
      </div>
    </div>
  );
};

export default Header;
