import React, { useState } from 'react';
import logo from '../assets/logo.png';
import menu_icon from '../assets/menu_icon.png';
import cross_icon from '../assets/cross_icon.png';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='bg-black h-40 flex flex-row justify-between items-center py-1 px-4 md:px-10 gap-4'>
            {/* Logo */}
            <div className='flex-1 items-center justify-start'>
                <img
                    className='w-24 md:w-32 cursor-pointer'
                    onClick={() => window.location.href = "https://chelmsfordmastercabs.com"}
                    src={logo}
                    alt="logo"
                />
            </div>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex items-center gap-14 font-semibold text-sm font-sans cursor-pointer text-white pr-10'>
                <a href="https://chelmsfordmastercabs.com/" rel="noopener noreferrer" className="py-1">
                    <li className='hover:text-amber-200'>Home</li>
                </a>
                <a href="https://chelmsfordmastercabs.com/about/" rel="noopener noreferrer" className="py-1">
                    <li className='hover:text-amber-200'>About</li>
                </a>
                <a href="https://chelmsfordmastercabs.com/services/" rel="noopener noreferrer" className="py-1">
                    <li className='hover:text-amber-200'>Services</li>
                </a>
                <a href="https://chelmsfordmastercabs.com/blog/" rel="noopener noreferrer" className="py-1">
                    <li className='hover:text-amber-200'>Blogs</li>
                </a>
                <a href="https://chelmsfordmastercabs.com/contact/" rel="noopener noreferrer" className="py-1">
                    <li className='hover:text-amber-200'>Contact</li>
                </a>
                <a href="https://booking.chelmsfordmastercabs.com/" rel="noopener noreferrer" className="py-1">
                    <li className='text-amber-300'>Book Now</li>
                </a>
            </ul>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex justify-end">
                <img
                    onClick={() => setShowMenu(true)}
                    className='w-8 cursor-pointer'
                    src={menu_icon}
                    alt="Menu Icon"
                />
            </div>

            {/* Mobile Menu */}
            <div className={`${showMenu ? 'fixed w-64' : 'w-0'} md:hidden right-0 top-0 bottom-0 z-20 bg-black transition-all duration-300 overflow-hidden`}>
                {/* Close Icon */}
                <div className='flex items-center justify-start px-5 py-4'>
                    <img
                        className='w-5 cursor-pointer'
                        onClick={() => setShowMenu(false)}
                        src={cross_icon}
                        alt="Close Menu"
                    />
                </div>

                {/* Navigation List */}
                <ul className='flex flex-col items-center gap-3 text-lg font-medium'>
                    <a href="https://chelmsfordmastercabs.com/" onClick={() => setShowMenu(false)} className='px-4 py-2 text-white'>Home</a>
                    <a href="https://chelmsfordmastercabs.com/about/" onClick={() => setShowMenu(false)} className='px-4 py-2 text-white'>About</a>
                    <a href="https://chelmsfordmastercabs.com/services/" onClick={() => setShowMenu(false)} className='px-4 py-2 text-white'>Services</a>
                    <a href="https://chelmsfordmastercabs.com/blog/" onClick={() => setShowMenu(false)} className='px-4 py-2 text-white'>Blogs</a>
                    <a href="https://chelmsfordmastercabs.com/contact/" onClick={() => setShowMenu(false)} className='px-4 py-2 text-white'>Contact</a>
                    <a href="https://booking.chelmsfordmastercabs.com/" onClick={() => setShowMenu(false)} className='px-4 py-2 text-amber-300'>Book Now</a>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;