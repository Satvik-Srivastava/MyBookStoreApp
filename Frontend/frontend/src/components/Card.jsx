import React from 'react'

function Card({item}) {
    console.log(item)
  return (
    <div className='hover:scale-95 mb-9'>
        <div className="card flex flex-col md:flex-row bg-base-300 shadow-xl space-x-0 md:space-x-4 mr-0 md:mr-9 p-3">
            <figure className='md:ml-9 md:w-80 w-full'>
                <img className='rounded-md w-full h-60 md:h-56 object-cover'
                    src={item.image}
                    alt="Movie" />
            </figure>
            <div className="card-body md:p-6">
                <h2 className="card-title text-lg md:text-xl md:font-bold">{item.name}</h2>
                <div className="badge bg-[#1DA1F2] text-xs md:text-sm text-white p-3">{item.category}</div>
                <p className='font-normal text-sm md:text-base mt-2'>Click the button to watch on Jetflix app.</p>
                <div className="flex items-center justify-between mt-4">
                    <p className='text-gray-600 font-semibold text-sm md:text-base'>₹ 199</p>
                    <div className="card-actions">
                        <button className="btn hover:bg-[#1DA1F2] text-sm md:text-base">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


  )
}

export default Card
