import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const VeiwDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const plant = data.find(p => p.plantId == id)

    return (
        <div className='flex items-center justify-center'>
            <div className="p-6">
                <h1 className="text-3xl font-bold">{plant.plantName}</h1>
                <img src={plant.image} className="w-72 rounded-xl mt-4" />
                <p className="mt-3">{plant.description}</p>

                <p className="mt-2">Category: {plant.category}</p>
                <p>Price: ${plant.price}</p>
                <p>Rating: ⭐ {plant.rating}</p>
                <p>Stock: {plant.availableStock}</p>
                <p>Care Level: {plant.careLevel}</p>

                <p className="mt-2 text-gray-500 italic">
                    Provider: {plant.providerName}
                </p>
            </div>
        </div>
    );
};

export default VeiwDetails;