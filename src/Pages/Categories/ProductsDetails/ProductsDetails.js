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
      <div className="card bg-slate-900 shadow-lg h-full">
        <figure className="px-2 mt-2 h-60 w-full py-4">
          <img src={img} alt="img" className="rounded" />
        </figure>
        <div className="card-body h-full bg-slate-300 mx-2 mb-2">
          <h2 className="card-title lg:h-20">
            Product Name:{" "}
            <span className="text-orange-600 font-bold">{name}</span>
          </h2>
          <div className="flex flex-col lg:h-20 lg:flex-row gap-2 mt-2 mb-2 bg-base-100 p-4 rounded">
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
          <div className="flex flex-col lg:h-20 lg:flex-row gap-2 mb-2 bg-base-100 p-4 rounded">
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
          <div className="flex flex-col lg:h-20 lg:flex-row gap-2 mb-2 bg-base-100 p-4 rounded">
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
          <div className="mb-2 bg-base-100 lg:h-36 p-4 rounded">
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
