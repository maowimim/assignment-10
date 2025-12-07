import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

const Plants = () => {

  const [Plantdata, setPlantdata] = useState([]);
  
  useEffect(() => {
    fetch('/plantdata.json')
      .then(res => res.json())
      .then(data => setPlantdata(data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className='px-[145px]'>
      <div className='grid grid-cols-3 mt-12 gap-10'>

        {Plantdata.map(plant => (
          <div key={plant.id} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                className='w-full h-[300px] object-cover'
                src={plant.image}
                alt={plant.plantName}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{plant.plantName}</h2>

              <div className='flex justify-between'>
                <p>Price: {plant.price}</p>
                <p>Rating: {plant.rating}</p>
              </div>

              <div className="card-actions justify-end">
                <Link to={`/veiwdetails/${plant.plantId}`}>
                <button className="btn btn-primary">View Details</button>
                </Link>
                
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Plants
