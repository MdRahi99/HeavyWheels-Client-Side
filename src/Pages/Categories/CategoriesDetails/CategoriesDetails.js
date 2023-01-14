import React from "react";
import { Link } from "react-router-dom";

const CategoriesDetails = ({ category }) => {
  const { title, img, id } = category;
  return (
    <div>
      <Link to={`/products/${id}`} className="card h-72 p-2 shadow-xl image-full hover:bg-slate-900">
        <figure>
          <img className="w-96" src={img} alt="blog-1" />
        </figure>
        <div className="card-body items-center justify-center shadow-lg">
          <h2 className="card-title text-2xl text-white shadow-lg p-2 rounded">
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default CategoriesDetails;
