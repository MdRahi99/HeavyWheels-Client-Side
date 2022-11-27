import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import Title from "../../../../Hooks/Title";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../../Shared/Loading/Loading";

const MyProducts = () => {
  Title("Added Products");
  const [deleteProduct, setDeletingProduct] = useState(null);

  const cancelModal = () => {
    setDeletingProduct(null);
  };
  const { user } = useContext(AuthContext);

  const url = "http://localhost:5000/addProduct/user_id"

  const { data: products = [], isLoading, refetch } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();;
      return data;
    },
  });

  const handleDeleteProduct = (product) => {
    console.log(product);

    fetch(`http://localhost:5000/addProduct/${product._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-slate-900 p-4 my-12 mx-4">
      <h3 className="text-3xl my-8 text-slate-200 text-center">My Products</h3>
      <div className="my-12 grid grid-cols-1 bg-base-200 p-8 gap-8 lg:grid-cols-2">
        {
            products.map(product => <div 
              key={product._id} 
            className="card bg-base-100 shadow-lg">
            <figure className="px-4 my-4 h-60 w-full py-4">
              <img src={product.img} alt="img" className="rounded" />
            </figure>
            <div className="card-body h-full bg-slate-300 mx-3 mb-3">
              <h2 className="card-title">Product Name: <span className="text-orange-600 font-bold">{product.name}</span></h2>
              <div className="flex flex-col lg:flex-row gap-2 mt-2 mb-2 bg-base-100 p-4 rounded">
                <p>Location: <span className="text-orange-600 font-bold">{product.location}</span></p>
                <p>Purchase Year: <span className="text-orange-600 font-bold">{product.purchaseYear}</span></p>
                <p>Condition: <span className="text-orange-600 font-bold">{product.condition}</span></p>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 mb-2 bg-base-100 p-4 rounded">
                <p>Seller: <span className="text-orange-600 font-bold">{product.seller}</span></p>
                <p>Contact: <span className="text-orange-600 font-bold">{product.phone}</span></p>
                <p>Posted: <span className="text-orange-600 font-bold">{product.posted_time}</span></p>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 mb-2 bg-base-100 p-4 rounded">
                <p>
                    Orginal Price:
                     <span className="text-orange-600 text-xl font-bold">{product.orginal_price}</span>
                </p>
                <p>
                    Resale Price: <span className="text-orange-600 text-xl font-bold">{product.price}</span>
                </p>
              </div>
              <div className="mb-2 bg-base-100 p-4 rounded">
                <p>Product Description: <span className="text-slate-800 font-bold">{product.description}</span></p>
              </div>
              <div className="card-actions justify-center">
                <label
                  htmlFor="confirmation-modal"
                  onClick={() => setDeletingProduct(product)}
                  className="btn bg-slate-900 hover:bg-slate-700 hover:text-slate-200"
                >
                  Delete
                </label>
                <label
                  htmlFor="selected-modal"
                  className="btn bg-slate-900 hover:bg-slate-700 hover:text-slate-200"
                >
                  Advertise
                </label>
              </div>
            </div>
          </div>)
        }
      </div>
      {deleteProduct && (
        <ConfirmationModal 
        name={`Are you sure you want to delete ?`}
        message={`Deleting ${deleteProduct.name} will be lost forever`}
        cancelModal = {cancelModal}
        successDelete={handleDeleteProduct}
        modalInfo = {deleteProduct}
        >  
        </ConfirmationModal>
      )}
    </div>
  );
};

export default MyProducts;
