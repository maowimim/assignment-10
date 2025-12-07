import React, { useEffect, useState } from 'react'

const PopularSection = () => {

  const [plantdata, setPlantdata] = useState([]);

    useEffect(()=>{
      fetch('/plantdata.json')
      .then(res=>res.json())
      .then(data => setPlantdata(data))
      .catch(err=>console.log(err))
    },[])

    console.log(plantdata);


  return (
    <div className='mt-8 px-[145px]'>
       <div>
          <h3 className='font-bold text-3xl text-center'>Our Top Rated Indoor Plants </h3>
        </div> 

     <div className='grid grid-cols-3 mt-12 gap-10'>
         {/* map */}

           {
            plantdata.map(plantdata =>

                  <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
    className='w-full h-[300px] object-cover'
      src={plantdata?.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{plantdata?.plantName}</h2>
    <div className='flex justify-between'>
      <p> Price : {plantdata?.price}</p>
      <p> Rating : {plantdata?.rating}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>

            )
           }


     </div>


 
 
 
</div>
   
  )
}

export default PopularSection
