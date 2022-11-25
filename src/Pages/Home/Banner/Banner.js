import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/banner.jpg";
import logo from "../../../assets/images/logo.png";

const Banner = () => {
  return (
    <div>
      <div className="my-12 relative">
        <div className="opacity-60">
          <img className="object-cover h-96 w-full" src={img} alt="home-bg" />
        </div>
        <div className="absolute w-full top-36 left-0 text-center">
            <p className="text-2xl font-semibold text-slate-100 lg:text-3xl mb-8">Buy your desired one...</p> 
          <p className="text-xl font-semibold text-slate-100 mb-12">
            Easy to choose, easy to buy
          </p>
          <div className="flex flex-row gap-2 align-items-center justify-center">
            <Link
              to="/categories"
              className="px-4 py-2 bg-orange-400 hover:bg-orange-600 text-slate-900 font-bold rounded"
            >
              Explore 
            </Link>
            <img className="h-10" src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
