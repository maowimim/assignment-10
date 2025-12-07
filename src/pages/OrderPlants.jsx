import axios from 'axios';
import React, { useEffect, useState } from 'react'

const OrderPlants = () => {
       const [myOrders, setMyOrders] = useState([]);
    console.log(myOrders)
    useEffect(() => {
        axios.get("https://backend-10-flame.vercel.app/orders")
            .then(res => {
                setMyOrders(res.data)
            })
            .catch(err => { console.log(err) })
    }, [])
    console.log(myOrders);
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
  )
}

export default OrderPlants
