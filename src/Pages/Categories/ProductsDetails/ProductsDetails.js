import React from "react";
import Title from "../../../Hooks/Title";

const ProductsDetails = ({ products, setSelectedProduct }) => {
  Title("Products");
  const {
    name,
    seller,
    img,
    orginal_price,
    price,
    condition,
    phone,
    location,
    posted_time,
    purchaseYear,
    description
  } = products;

  return (
    <div>
      <div className="card bg-base-100 shadow-lg">
        <figure className="px-4 my-4 h-60 w-full py-4">
          <img src={img} alt="img" className="rounded" />
        </figure>
        <div className="card-body h-full bg-slate-300 mx-3 mb-3">
          <h2 className="card-title">
            Product Name:{" "}
            <span className="text-orange-600 font-bold">{name}</span>
          </h2>
          <div className="flex flex-col lg:flex-row gap-2 mt-2 mb-2 bg-base-100 p-4 rounded">
            <p>
              Location:{" "}
              <span className="text-orange-600 font-bold">{location}</span>
            </p>
            <p>
              Purchase Year:{" "}
              <span className="text-orange-600 font-bold">{purchaseYear}</span>
            </p>
            <p>
              Condition:{" "}
              <span className="text-orange-600 font-bold">{condition}</span>
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 mb-2 bg-base-100 p-4 rounded">
            <p>
              Seller:{" "}
              <span className="text-orange-600 font-bold">{seller}</span>
            </p>
            <p>
              Contact:{" "}
              <span className="text-orange-600 font-bold">{phone}</span>
            </p>
            <p>
              Posted:{" "}
              <span className="text-orange-600 font-bold">{posted_time}</span>
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 mb-2 bg-base-100 p-4 rounded">
            <p>
              Orginal Price:
              <span className="text-orange-600 text-xl font-bold">
                {orginal_price}
              </span>
            </p>
            <p>
              Resale Price:{" "}
              <span className="text-orange-600 text-xl font-bold">{price}</span>
            </p>
          </div>
          <div className="mb-2 bg-base-100 p-4 rounded">
            <p>
              Product Description:{" "}
              <span className="text-slate-800 font-bold">{description}</span>
            </p>
          </div>
          <div className="card-actions justify-center">
            <label
              htmlFor="selected-modal"
              onClick={() => setSelectedProduct(products)}
              className="btn bg-slate-900 hover:bg-slate-700 hover:text-slate-200"
            >
              Select
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
