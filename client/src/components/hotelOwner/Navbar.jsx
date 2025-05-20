import React from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 *
       bg-white transition-all py-3'>
            <Link to='/'>
            <img src={assets.hotelLogo} alt="logo"  className='h-9 ' />
            </Link>
            <UserButton/>
        </div>
    );
};

export default Navbar;