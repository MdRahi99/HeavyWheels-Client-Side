import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import Title from "../../../../Hooks/Title";
import Loading from "../../../Shared/Loading/Loading";

const MyOrders = () => {
  Title("My Orders");
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/myOrders?email=${user?.email}`;
  const { data: myOrders, isLoading } = useQuery({
    queryKey: ["myOrders", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
          headers: {
             authorization: `bearer ${localStorage.getItem('accessToken')}` 
          }
      });
      const data = await res.json();
      return data;
  }
  });

  if (isLoading) {
    <Loading></Loading>;
  }

  return <div>
    {
        myOrders.map((orders,i) => {
            <h1>{i+1}</h1>    
        }
        )
    }
  </div>;
};

export default MyOrders;
