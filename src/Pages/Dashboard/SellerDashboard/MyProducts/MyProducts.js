import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import Title from "../../../../Hooks/Title";
import MyProductDetails from "./MyProductDetails";

const MyProducts = () => {
  Title("Added Products");
  const { user } = useContext(AuthContext);

  const url = "http://localhost:5000/addProduct/user_id"

  const { data: products = [] } = useQuery({
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

  return (
    <div className="bg-slate-900 p-4 my-12 mx-4">
      <h3 className="text-3xl my-8 text-slate-200 text-center">My Products</h3>
      <div className="my-12 grid grid-cols-1 bg-base-200 p-8 gap-8 lg:grid-cols-2">
        {
            products.map(product => <MyProductDetails
                key={product._id}
                product={product}
            ></MyProductDetails>)
        }
      </div>
    </div>
  );
};

export default MyProducts;
