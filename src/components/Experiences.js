import React from 'react'
import Card from './Card'
import cardImg1 from '../assets/images/card/cardImg1.jpg'
import cardImg2 from '../assets/images/card/cardImg2.jpg'
import cardImg3 from '../assets/images/card/cardImg3.jpg'


function Experiences() {

    let data = [
        {
            title: 'The Coldest Sunset',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            time: 135,
            img: cardImg1
        },
        {
            title: 'The Campfire in woods',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            time: 186,
            img: cardImg2
        },
        {
            title: 'The Treasurehunt',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            time: 120,
            img: cardImg3
        },
    ]

    return (
        <div className='shadow-xl w-full'>
            <div className='flex justify-between'>
                <div className='font-serif font-bold'>
                    Your upcoming experiences
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

export default Experiences