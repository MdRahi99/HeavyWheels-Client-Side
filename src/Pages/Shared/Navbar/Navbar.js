import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from 'react-icons/fa';
import { UserIcon } from '@heroicons/react/24/solid';
import logo from "../../../assets/images/logo.png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then()
    .catch();
  };

  const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories">All Categories</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>

        {
            user?.email ? 
            <>
            <li className='font-semibold'><Link to='/dashboard'>Dashboard</Link></li>
            <li className='font-semibold'><button onClick={handleLogOut}>Logout</button></li>
            </>
            :
            <></>
        }
    </React.Fragment>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <div className="px-2 py-1 rounded">
          <Link
            to="/"
            className="flex flex-row gap-2 items-center text-xl normal-case font-bold"
          >
            Heavy <img className="h-12" src={logo} alt="logo" /> Wheel
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <div className="flex gap-2 items-center">
            <img className="h-8" src={user?.photoURL} alt="" />
            <p className="bg-slate-900 text-slate-200 p-2">{user.displayName}</p>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
            <UserIcon className="h-4 w-4 text-light ml-3" />
          </Link>
        )}
      </div>
      <label htmlFor="dashboard-drawer"  tabIndex={2} className="btn btn-ghost lg:hidden">
            <FaAngleDoubleRight className="text-2xl"></FaAngleDoubleRight>
      </label>
    </div>
  );
};

export default Navbar;
