import React from 'react'
import MentorsCard from './MentorsCard'
import mentorImg1 from '../assets/images/mentor/mentor1.jpg'
import mentorImg2 from '../assets/images/mentor/mentor2.jpg'
import mentorImg3 from '../assets/images/mentor/mentor3.jpg'


function Mentors() {
    let data = [
        {
            name: '',
            desc: 'this is some random info about mentor 1',
            img: mentorImg1
        },
        {
            name: '',
            desc: 'this is some random info about mentor 2',
            img: mentorImg2
        },
        {
            name: '',
            desc: 'this is some random info about mentor 3',
            img: mentorImg3
        }
    ]


    return (
        <div className='shadow-xl w-full py-4'>
            <div className='my-2 py-4 px-3 font-serif font-bold'>
                New Mentors on Edvolve
            </div>
            {/* Mentors div */}
            {data.map((val, key) => {
                return (
                    <div className='my-3 px-3'>
                        <MentorsCard {...val} />
                    </div>
                )
            })}
        </div>
    )
}

export default Mentors