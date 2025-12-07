
import React, {useState } from 'react';

const MyOrders = () => {
    const [myOrders,] = useState([]);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th>location</th>
                            <th>Quantity</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order?.productName}</td>
                                <td>{order?.price}</td>
                                <td>{order?.phoneNumber}</td>
                                <td>{order?.address}</td>
                                <td>{order?.quantity}</td>
                                <td>
                                    {order?.date &&
                                        new Date(order.date).toLocaleString("en-US", {
                                            year: "numeric",
                                            month: "2-digit",
                                            day: "2-digit",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })
                                    }
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;