import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyPlants = () => {
    const { user } = use(AuthContext)
    const [myPlants, setMyPlants] = useState([]);
    console.log(myPlants)
    useEffect(() => {
        fetch(`http://localhost:3000/my-plants?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyPlants(data))
            .catch((err) => console.log(err));
    }, [user?.email]);

    const handleDelete = (id) => {
       


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://missionscic10-tau.vercel.app/delete/${id}`)
                    .then(res => console.log(res));
                const filter = myPlants.filter(service => service._id != id)
               setMyPlants(filter)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }
    return (
        <div>
            <h2 className='text-center text-3xl my-3'>My Services</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myPlants?.map(services =>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={services?.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{services?.name}</div>
                                                <div className="text-sm opacity-50">{services?.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{services?.description}</p>
                                    </td>
                                    <td>{services?.price}</td>
                                    <th className='flex gap-1'>
                                        <button onClick={() => handleDelete(services?._id)} className="btn btn-error btn-xs">Delete</button>
                                        <Link to={`/update-plant/${services?._id}`}> <button className="btn btn-primary btn-xs">Edit</button></Link>

                                    </th>
                                </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyPlants;
