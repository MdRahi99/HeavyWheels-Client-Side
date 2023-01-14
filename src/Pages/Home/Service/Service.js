import React from "react";
import search from "../../../assets/images/search.jpeg";
import verified from "../../../assets/images/verified.png";
import price from "../../../assets/images/price.png";

const Service = () => {
  return (
    <div className="bg-base-200 p-4 my-12">
      <div className="p-4 bg-slate-700 text-slate-200">
        <h1 className="text-2xl font-semibold text-center">We Will Offer</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 justify-around items-center my-6">
        <div className="card w-96 h-full bg-base-200 hover:bg-slate-900 p-2 shadow-xl image-full">
          <figure>
            <img src={search} alt="" />
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-3xl font-mono">Easy to Choose</h2>
          </div>
        </div>
        <div className="card w-96 h-full bg-base-200 hover:bg-slate-900 p-2 shadow-xl image-full">
          <figure>
            <img src={price} alt="" />
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-3xl font-mono">Cost Effective</h2>
          </div>
        </div>
        <div className="card w-96 h-full bg-base-200 hover:bg-slate-900 p-2 shadow-xl image-full">
          <figure>
            <img src={verified} alt="" />
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-3xl font-mono">Fully Verified Products</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
