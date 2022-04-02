import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between">
      <div className="hidden md:block">
        <h1 className="font-sans font-bold text-xl  text-gray-600"><Link to='/'>Crypto Cafe</Link></h1>
      </div>
      <div className="flex gap-4 text-xl">
          <CustomLink to='/home'>Home</CustomLink>
          <CustomLink to='/coins'>Coins</CustomLink>
          <CustomLink to='/contact'>Contact</CustomLink>
          <CustomLink to='/about'>About</CustomLink>
      </div>
    </div>
  );
};

export default Header;
