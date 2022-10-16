import React from 'react'

function Mentors({ name, desc, img }) {
    return (
        <>
            <div className='flex rounded-xl '>
                <div className='w-28 h-28'>
                    <img className='rounded-xl h-full w-full object-fill' src={img} />
                </div>
                <div className='py-1 mx-3'>
                    <h3 className='font-sans text-xl text-gray-700	font-bold'>
                        {name}
                    </h3>
                    <p className='py-3'>
                        {desc}
                    </p>
                    <button type="button" class="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">See people</button>
                </div>
            </div>
        </>
    )
}

export default Mentors