import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/advertise.jpg";

const AdvertisedProduct = () => {
  const [adsStatus, setAdsStatus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addProduct/seller/advertised")
      .then((res) => res.json())
      .then((data) => setAdsStatus(data));
  }, []);
  return (
    <div>
      {adsStatus?.length === 0 ? (
        <></>
      ) : (
        <div className="bg-slate-900 p-4 my-12 mx-4">
          <div className="card w-full h-60 bg-base-100 shadow-xl image-full">
            <figure>
              <img className="w-full" src={img} alt="" />
            </figure>
            <div className="card-body">
              <h3 className="text-3xl font-bold text-slate-100 bg-slate-800 p-16 text-center">
                Best value for money products
              </h3>
            </div>
          </div>

          <div className="my-12 grid grid-cols-1 bg-base-200 p-8 gap-8 lg:grid-cols-3">
            {adsStatus.map((product) => (
              <div key={product._id} className="card bg-base-100 shadow-lg">
                <figure className="px-4 my-4 h-96 w-full py-4">
                  <img src={product.img} alt="img" className="rounded" />
                </figure>
                <div className="card-body h-full bg-slate-300 mx-3 mb-3">
                  <h2 className="card-title">
                    Product Name:{" "}
                    <span className="text-orange-600 font-bold">
                      {product.name}
                    </span>
                  </h2>
                  <div className="flex flex-col lg:flex-row gap-2 mt-2 mb-2 bg-base-100 p-4 rounded">
                    <p>
                      Location:{" "}
                      <span className="text-orange-600 font-bold">
                        {product.location}
                      </span>
                    </p>
                    <p>
                      Purchase Year:{" "}
                      <span className="text-orange-600 font-bold">
                        {product.purchaseYear}
                      </span>
                    </p>
                    <p>
                      Condition:{" "}
                      <span className="text-orange-600 font-bold">
                        {product.condition}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-2 mb-2 bg-base-100 p-4 rounded">
                    <p>
                      Seller:{" "}
                      <span className="text-orange-600 font-bold">
                        {product.seller}
                      </span>
                    </p>
                    <p>
                      Contact:{" "}
                      <span className="text-orange-600 font-bold">
                        {product.phone}
                      </span>
                    </p>
                    <p>
                      Posted:{" "}
                      <span className="text-orange-600 font-bold">
                        {product.posted_time}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-2 mb-2 bg-base-100 p-4 rounded">
                    <p>
                      Orginal Price:
                      <span className="text-orange-600 text-xl font-bold">
                        {product.orginal_price}
                      </span>
                    </p>
                    <p>
                      Resale Price:{" "}
                      <span className="text-orange-600 text-xl font-bold">
                        {product.price}
                      </span>
                    </p>
                  </div>
                  <div className="mb-2 bg-base-100 p-4 rounded">
                    <p>
                      Product Description:{" "}
                      <span className="text-slate-800 font-bold">
                        {product.description}
                      </span>
                    </p>
                  </div>
                  <div className="card-actions justify-center">
                    <Link
                      className="btn bg-slate-900 hover:bg-slate-700 hover:text-slate-200"
                      to={`products/${product.category_id}`}
                    >
                      Visit
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvertisedProduct;
