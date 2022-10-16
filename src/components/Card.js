import React from 'react'



function Card({ title, desc, time, img }) {
    return (
        <div className='text-center'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className='w-full h-36'>
                    <img className="w-full h-full" src={img} alt="Sunset in the mountains" />
                </div>

                <div className="px-2 py-4">
                    <div className="font-bold text-sm md:text-m mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {desc}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{time} mins</span>
                </div>
            </div>
        </div>
    )
}

export default Card