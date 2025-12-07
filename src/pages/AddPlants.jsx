import React, { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const AddPlants = () => {

  const {user} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const description = form.description.value;
    const location = form.location.value;
    const image = form.image.value;
    const date = form.date.value;
    const email = form.email.value;

    const formData = {
      name,
      category,
      price,
      description,
      location,
      image,
      date,
      email,

  
    }
    console.log(formData);
    axios.post('https://backend-10-flame.vercel.app/services', formData)
    .then(res=>{
      console.log(res);
    })

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <form onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Add Plant/Product
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Product / Plant Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
      
          {/* Category */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Category</label>
          <select
            name="category"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Select Category</option>
            <option value="indoor">Indoor Plants</option>
            <option value="outdoor">Outdoor Plants</option>
            <option value="tools">Gardening Tools & Supplies</option>
            <option value="accessories">Plant Pots & Accessories</option>
          </select>
        </div>

    
        {/* Price */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Price</label>
          <input
            type="number"
            name="price"
            min="0"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            name="description"
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows="3"
          ></textarea>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Location</label>
          <input
            type="text"
            name="location"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Image URL</label>
          <input
            type="url"
            name="image"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Pickup Date */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Pickup Date</label>
          <input
            type="date"
            name="date"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            Value={user?.email}
            type="email"
            name="email"
            readOnly
            className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-white font-bold py-2 rounded hover:bg-green-800 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddPlants;
