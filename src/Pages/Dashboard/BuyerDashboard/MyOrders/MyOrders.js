import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import Title from "../../../../Hooks/Title";

const MyOrders = () => {
  Title("All Orders");
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/orders?email=${user?.email}`;

  const { data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
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
    <div>
      <h3 className="text-3xl mb-5">My Orders</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Location</th>
              <th>resalePrice</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((orders, i) => (
              <tr key={orders._id}>
                <th>{i + 1}</th>
                <td>{orders.itemName}</td>
                <td>{orders.place}</td>
                <td>{orders.resalePrice}</td>
                <td>{orders.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
