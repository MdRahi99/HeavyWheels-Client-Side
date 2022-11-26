import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Title from "../../../../Hooks/Title";

const AddProducts = () => {
  Title("Add Products");
  const navigate = useNavigate();

  const handleAddProducts = (event) => {
    event.preventDefault();
    const form = event.target;
    const user_id = form.user_id.value;
    const name = form.name.value;
    const seller = form.seller.value;
    const img = form.img.value;
    const orginal_price = form.orginal_price.value;
    const price = form.price.value;
    const condition = form.condition.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const category_id = form.category_id.value;
    const purchaseYear = form.purchaseYear.value;
    const posted_time = form.posted_time.value;
    const description = form.description.value;

    const newProducts = {
        user_id,
        name,
        seller,
        img,
        orginal_price,
        price,
        condition,
        phone,
        location,
        category_id,
        posted_time,
        purchaseYear,
        description
    };
    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(newProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully Added Product");
          form.reset();
          navigate('/dashboard/myProducts');
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div className="my-12">
      <div className="p-4">
      <form onSubmit={handleAddProducts} className="mx-60 bg-slate-300 shadow-lg p-8">
        <div className="form-control w-full max-w-xs">
          <input name="user_id" type="text" defaultValue="user_id" disabled className="input input-bordered input-info w-full max-w-xs"/>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input name="name" type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" required/>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input name="seller" type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" required/>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input name="img" type="text" className="input input-bordered input-info w-full max-w-xs" placeholder="Enter your image url" />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Orginal Price</span>
          </label>
          <input name="orginal_price" type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" required/>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Price</span>
          </label>
          <input name="price" type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" required/>
        </div>

        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Product Condition</span>
            </label>
            <select name="condition" required className="select select-info w-full max-w-xs">
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
            </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <input name="phone" type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" required/>
        </div>

        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Location</span>
            </label>
            <select name="location" required className="select select-info w-full max-w-xs">
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Comilla</option>
                <option>Rajshahi</option>
                <option>Chittagong</option>
                <option>Maymensingh</option>
                <option>Barisal</option>
                <option>Khulna</option>
                <option>Rangpur</option>
            </select>
        </div>
        
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Product Category</span>
            </label>
            <select name="category_id" required className="select select-info w-full max-w-xs">
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
            </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Year of Purchase</span>
          </label>
          <input name="purchaseYear" type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" required/>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Posted Time</span>
          </label>
          <input name="posted_time" type="date" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" required/>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <textarea name="description" className="textarea textarea-info" placeholder="" required></textarea>
        </div>

        <div className="form-control mt-6">
            <button className="btn bg-slate-900 hover:bg-slate-700">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default AddProducts;
