import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const ProductsModal = ({ selectedProduct, setSelectedProduct }) => {
  const { user } = useContext(AuthContext);
  const { name, resale_price } = selectedProduct;

  const handleSelectedProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const itemName = form.itemName.value;
    const resalePrice = form.resalePrice.value;
    const phone = form.phone.value;
    const place = form.place.value;

    const selectedProduct = {
      name,
      email,
      itemName,
      resalePrice,
      phone,
      place
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setSelectedProduct(null);
          toast.success("Order confirmed");
        } else {
          toast.error(data.message);
        }
      });
  };

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
          <form onSubmit={handleSelectedProduct} className="grid grid-cols-1 gap-3 mt-10">
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
