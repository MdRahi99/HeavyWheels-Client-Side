import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/error-route.jpg";

const ErrorRoute = () => {
  return (
    <div className="card mx-auto my-40 w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-center">
          <Link to='/' className="btn bg-slate-900 hover:bg-slate-700">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorRoute;
