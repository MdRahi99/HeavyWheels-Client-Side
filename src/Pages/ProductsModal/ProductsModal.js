import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const ProductsModal = ({selectedProduct}) => {
  const { user } = useContext(AuthContext);
  const {name, resale_price} = selectedProduct;

  return (
    <>
      <input type="checkbox" id="selected-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="selected-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form className="grid grid-cols-1 gap-3 mt-10">
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="itemName"
              type="text"
              value={name}
              disabled
              className="input w-full input-bordered"
            />
            <input
              name="resalePrice"
              type="text"
              value={resale_price}
              disabled
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className="input w-full input-bordered"
            />
            <input
              name="place"
              type="text"
              placeholder="Meeting Place"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-success hover:bg-green-800 hover:text-slate-200"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductsModal;
