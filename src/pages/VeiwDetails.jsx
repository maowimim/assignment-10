import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const VeiwDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const plant = data.find(p => p.plantId == id);

    const { user } = useContext(AuthContext);

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;

        const productName = form.productName.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const quantity = form.quantity.value;
        const price = parseFloat(form.price.value);
        const address = form.address.value;
        const phoneNumber = form.phoneNumber.value;
        const note = form.note.value;

        const orderData = {
            productId: id,
            productName,
            buyerName,
            buyerEmail,
            quantity,
            price,
            address,
            phoneNumber,
            note,
            date: new Date()
        };

        axios.post("https://backend-10-flame.vercel.app/orders", orderData)
            .then(res => {
                console.log(res.data);
                alert("Order placed successfully!");
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='flex items-center justify-center min-h-screen p-6'>
            <div className="p-6 max-w-4xl w-full bg-white shadow-2xl rounded-2xl">
                <h1 className="text-3xl font-bold">{plant.plantName}</h1>
                <img src={plant.image} className="w-72 rounded-xl mt-4" alt={plant.plantName} />
                <p className="mt-3">{plant.description}</p>
                <p className="mt-2">Category: {plant.category}</p>
                <p>Price: ${plant.price}</p>
                <p>Rating: ⭐ {plant.rating}</p>
                <p>Stock: {plant.availableStock}</p>
                <p>Care Level: {plant.careLevel}</p>
                <p className="mt-2 text-gray-500 italic">Provider: {plant.providerName}</p>

                {/* Book Now Button */}
                <div className="mt-6">
                    <button
                        className="btn bg-green-600 text-white w-full py-3 rounded-lg hover:bg-green-700"
                        onClick={() => document.getElementById('plant_order_modal').showModal()}
                    >
                        Book Now
                    </button>

                    {/* Modal */}
                    <dialog id="plant_order_modal" className="modal">
                        <div className="modal-box relative">
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => document.getElementById('plant_order_modal').close()}
                            >
                                ✕
                            </button>

                            <form onSubmit={handleOrder} className="space-y-4">
                                <h2 className="text-2xl font-bold mb-4 text-center">Order Plant</h2>

                                <label className="label">Plant Name</label>
                                <input
                                    name="productName"
                                    type="text"
                                    readOnly
                                    defaultValue={plant.plantName}
                                    className="input input-bordered w-full"
                                />

                                <label className="label">Buyer Name</label>
                                <input
                                    name="buyerName"
                                    type="text"
                                    defaultValue={user?.displayName || ''}
                                    required
                                    placeholder="Your Name"
                                    className="input input-bordered w-full"
                                />

                                <label className="label">Buyer Email</label>
                                <input
                                    name="buyerEmail"
                                    type="email"
                                    defaultValue={user?.email || ''}
                                    readOnly
                                    className="input input-bordered w-full"
                                />

                                <label className="label">Quantity</label>
                                <input
                                    name="quantity"
                                    type="number"
                                    required
                                    placeholder="Quantity"
                                    className="input input-bordered w-full"
                                />

                                <label className="label">Price</label>
                                <input
                                    name="price"
                                    type="number"
                                    readOnly
                                    defaultValue={plant.price}
                                    className="input input-bordered w-full"
                                />

                                <label className="label">Address</label>
                                <input
                                    name="address"
                                    type="text"
                                    required
                                    placeholder="Delivery Address"
                                    className="input input-bordered w-full"
                                />

                                <label className="label">Phone Number</label>
                                <input
                                    name="phoneNumber"
                                    type="text"
                                    required
                                    placeholder="Phone Number"
                                    className="input input-bordered w-full"
                                />

                                <label className="label">Additional Note</label>
                                <textarea
                                    name="note"
                                    placeholder="Any additional info"
                                    className="input input-bordered w-full h-24"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-full bg-green-600 hover:bg-green-700 text-white"
                                >
                                    Place Order
                                </button>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default VeiwDetails;
