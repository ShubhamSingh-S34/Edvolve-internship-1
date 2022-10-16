import React from 'react'
import StatsCard from './StatsCard'

function Stats() {

    let data = [
        {
            num: 7,
            title: 'Experiences this week'
        },
        {
            num: 8,
            title: 'Courses attended'
        },
        {
            num: 2,
            title: 'Courses missed this week'
        }
    ]

    return (
        <div className='shadow-xl w-full'>
            <div className='flex justify-between'>
                <div className='font-serif font-bold p-2'>
                    Your Stats
                </div>
            </div>

            {/* Stats div */}
            <div className='my-5 grid grid-cols-3 gap-x-2 px-3 py-3'>
                {data.map((val, key) => {
                    return (
                        <div className='h-32'>
                            <StatsCard {...val} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Stats