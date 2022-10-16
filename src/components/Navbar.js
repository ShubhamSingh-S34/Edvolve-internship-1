import React, { useState } from 'react'
import profilePicture from '../assets/images/profilePicture2.jpg'



function Navbar() {

    let Links = [
        { name: "Dashboard", link: "/" },
        { name: "Experience Zone", link: "/" },
        { name: "Learning Zone", link: "/" },
    ];

    let profileName = "Saraha Lorenze";
    let [open, setOpen] = useState(false);
    return (<>
        <nav className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='justify-items-start md:flex'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] justify-center'>
                        <span className='text-3xl text-yellow-400 mr-1 pt-2'>
                            <ion-icon name="flower"></ion-icon>
                        </span>
                    </div>

                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                    <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                                </li>
                            ))
                        }
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <input className='bg-slate-100 text-center rounded-lg' placeholder='Search' />
                        </li>
                    </ul>

                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute left-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                {!open ? <div className='invisible md:visible rounded-full flex'>
                    <img className='w-10 rounded-full h-10' src={profilePicture} />
                    <p className='py-2 px-3 align-middle'>{profileName}</p>
                </div> : null}


            </div>
        </nav>
    </>)
}

export default Navbar