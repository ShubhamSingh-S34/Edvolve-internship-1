import React from 'react'
import Card from './Card'


import courseImg1 from "../assets/images/course/courseImg1.jpg"
import courseImg2 from "../assets/images/course/courseImg2.jpg"
import courseImg3 from "../assets/images/course/courseImg3.jpg"


function Courses() {

    let data = [
        {
            title: 'The Coldest Sunset',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            time: 135,
            img: courseImg1
        },
        {
            title: 'The Campfire in woods',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            time: 186,
            img: courseImg2
        },
        {
            title: 'The Treasurehunt',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            time: 120,
            img: courseImg3
        },
    ]

    return (
        <div className='shadow-md w-full my-7'>
            <div className='flex justify-between'>
                <div className='font-serif font-bold'>
                    Your upcoming courses
                </div>
                <p className='cursor-pointer'>see all</p>
            </div>
            {/* card div */}
            <div className='my-5 grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4'>
                {data.map((val, key) => {
                    return (<Card {...val} />)
                })}

            </div>
        </div>
    )
}

export default Courses