import React from "react";

const ProductsDetails = ({ products }) => {
  console.log(products);
  const {
    name,
    location,
    img,
    orginal_price,
    resale_price,
    seller,
    time,
    years_of_use,
  } = products;
  return (
    <div>
      <div className="card bg-base-100 shadow-lg">
        <figure className="px-4 h-60 w-full py-4">
          <img
            src={img}
            alt="img"
            className="rounded"
          />
        </figure>
        <div className="card-body items-center text-center h-96">
          <h2 className="card-title">{name}</h2>
          <p>{location}</p>
          <p>Years of Use: {years_of_use}</p>
          <p>Seller Name: {seller}</p>
          <p>Posted: {time}</p>
            <p>Orginal Price: <span className="text-xl font-semibold">{orginal_price}</span></p>
            <p>Resale Price: <span className="text-xl font-semibold">{resale_price}</span></p>
          <div className="card-actions">
            <button className="btn btn-success hover:bg-green-800 hover:text-slate-200">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
