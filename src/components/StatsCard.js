import React from 'react'

function Stats({ num, title }) {



    return (
        <div className='bg-neutral-300 w-full h-full rounded-xl'>
            <h1 className='font-mono text-3xl p-3 text-gray-900	font-bold'>
                {num}
            </h1>
            <p className='p-1 text-sm'>
                {title}
            </p>
        </div>
    )
}

export default Stats