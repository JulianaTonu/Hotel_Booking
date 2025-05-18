import React from 'react';
import { assets } from '../assets/assets';

const HotelReg = () => {
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-100 flex
        items-center justify-center bg-black/70'>
            <form action="">
                <img src={assets.regImage} alt="reg-image"
                    className='w-1/2 rounded-xl hidden md:block'
                />

                <div>
                    <img src={assets.closeIcon} alt="closeIcon" className='absolute top-4
                right-4 h-4 w-4 cursor-pointer'/>
                </div>
            </form>

        </div>
    );
};

export default HotelReg;