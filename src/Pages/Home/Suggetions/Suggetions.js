import React from "react";
import frame from "../../../assets/images/frame.jpg";
import suspension from "../../../assets/images/suspension.jpg";
import wheels from "../../../assets/images/wheels.jpg";
import points from "../../../assets/images/points.jpg";

const Suggetions = () => {
  return (
    <div className="bg-base-200 p-4 my-12">
      <div className="p-4 bg-slate-700 text-slate-200">
        <h1 className="text-2xl font-semibold text-center">
          Things you need to know before buying any Cycle
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
        <div className="card lg:card-side bg-base-100 shadow-xl mt-6">
          <figure className="lg:w-60 mt-4 lg:mt-0">
            <img className="h-60" src={frame} alt="" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-2xl font-serif">Frame</h2>
            <p>Test ride the bike, the frame is heart of the ride.</p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl mt-6">
          <figure className="lg:w-60 mt-4 lg:mt-0">
            <img className="h-60" src={suspension} alt="" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-2xl font-serif">Suspension</h2>
            <p>
              On mountain bikes, suspension almost goes hand-in-hand with the
              frame.
            </p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl mb-6">
          <figure className="lg:w-60 mt-4 lg:mt-0">
            <img className="h-60" src={wheels} alt="" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-2xl font-serif">Wheels</h2>
            <p>Reliability and rotating mass are important.</p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl mb-6">
          <figure className="lg:w-60 mt-4 lg:mt-0">
            <img className="h-60" src={points} alt="" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-2xl font-serif">Contact points</h2>
            <p>
              Tyres, saddle, and handlebars. These can make a huge difference to
              your ride.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggetions;
