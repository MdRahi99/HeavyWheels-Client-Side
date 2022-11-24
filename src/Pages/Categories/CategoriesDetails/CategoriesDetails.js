import React from "react";
import { Link } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";

const CategoriesDetails = ({ category }) => {
  const { title, img, id } = category;
  return (
    <div>
      <div className="card h-72 p-2 shadow-xl image-full hover:bg-slate-900">
        <figure>
          <img className="w-96" src={img} alt="blog-1" />
        </figure>
        <div className="card-body shadow-lg relative">
          <h2 className="card-title text-white shadow-lg p-2 rounded absolute top-24 left-32">
            {title}
          </h2>
          <div className="absolute top-40 left-44">
            <Link to={`/products/${id}`} className="text-4xl hover:text-5xl hover:text-slate-400">
              <FiChevronsRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesDetails;
