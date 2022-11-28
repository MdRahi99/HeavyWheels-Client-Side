import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import Title from "../../../../Hooks/Title";

const MyOrders = () => {
  Title("All Orders");
  const { user } = useContext(AuthContext);

  const url = `https://heavy-wheels-server.vercel.app/orders?email=${user?.email}`;

  const { data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="bg-slate-900 p-4 my-12 mx-4">
      <h3 className="text-3xl my-8 text-slate-200 text-center">My Orders</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="hover">
              <th>No.</th>
              <th>Name</th>
              <th>Location</th>
              <th>Price</th>
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
                <td>
                  {orders.resalePrice && !orders.paid && (
                    <Link to={`/dashboard/payment/${orders._id}`}>
                      <button className="btn btn-info btn-sm">Pay</button>
                    </Link>
                  )}

                  {orders.resalePrice && orders.paid && (
                      <span className="bg-slate-900 text-slate-200 p-2 rounded">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
