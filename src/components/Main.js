import React from 'react'
import Courses from './Courses'
import Experiences from './Experiences'
import Mentors from './Mentors'
import NameSection from './NameSection'
import Stats from './Stats'
function Main() {
    return (
        <>
            {/* // Display Name section */}
            <NameSection />
            <div className='flex flex-col md:flex-row md:justify-between px-7'>
                {/* // left part div */}
                <div className='m-full mx-auto px-auto md:mx-10 md:w-3/5'>
                    <Experiences />
                    <Courses />
                </div>

                {/* //Right part div */}
                <div className='w-full mx-auto px-auto md:mx-10 md:w-2/5'>
                    <Stats />
                    <Mentors />
                </div>
            </div>
        </>
    )
}

export default Main