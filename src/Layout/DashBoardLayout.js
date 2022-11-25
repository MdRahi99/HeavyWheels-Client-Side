import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useSeller from "../Hooks/useSeller";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  <Navbar></Navbar>;
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            {!isAdmin && !isSeller && (
              <div>
                <li>
                  <Link to="/dashboard/myOrders">All Orders</Link>
                </li>
              </div>
            )}
            {!isAdmin && isSeller && (
              <div>
                <li>
                  <Link to="/dashboard/myBuyers">My Buyers</Link>
                  <Link to="/dashboard/myProducts">My Products</Link>
                  <Link to="/dashboard/addProducts">Add a Product</Link>
                </li>
              </div>
            )}
            {isAdmin && (
              <div className="p-4 flex flex-col gap-4">
                <li>
                  <Link to="/dashboard/allBuyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allSellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/reportedItems">Reported Items</Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
