import React from 'react';
import { assets, cities } from '../assets/assets';

const Hero = () => {
    return (
        <div className="relative h-screen w-full text-white">
            {/* Background image */}
            <div className="absolute inset-0 bg-[url('/src/assets/heroImage1.jpg')] bg-cover bg-center bg-no-repeat z-0" />

            {/* Dark overlay with opacity */}
            <div className="absolute inset-0 bg-black opacity-40 z-0" />

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col items-start  justify-center h-full xl:px-32">
                <p className=' md:pl-0 bg-[#49B9FF]/50 px-3.5  py-1 rounded-full mt-20'>
                    The ultimate Hotel Experience
                </p>

                <h1 className=' font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>
                    Discover Your Perfect Gateway Destination
                </h1>

                <p className='max-w-130 my-6 text-sm md:text-base'>
                    Unparalleled luxury and comfort await at the world's most exclusive Hotels and resorts. Start your journey today.
                </p>

                <form className='bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

                    <div>
                        <div className='flex items-center gap-2'>
                            <img src={assets.calenderIcon} alt="" className='h-4' />
                            <label htmlFor="destinationInput">Destination</label>
                        </div>
                        <input
                            list='destinations'
                            id="destinationInput"
                            type="text"
                            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                            placeholder="Type here"
                            required
                        />
                        <datalist id='destinations'>
                            {cities.map((city, index) => (
                                <option value={city} key={index} />
                            ))}
                        </datalist>
                    </div>

                    <div>
                        <div className='flex items-center gap-2'>
                            <img src={assets.calenderIcon} alt="calendar" className='h-4' />
                            <label htmlFor="checkIn">Check in</label>
                        </div>
                        <input
                            id="checkIn"
                            type="date"
                            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                        />
                    </div>

                    <div>
                        <div className='flex items-center gap-2'>
                            <img src={assets.calenderIcon} alt="check" className='h-4' />
                            <label htmlFor="checkOut">Check out</label>
                        </div>
                        <input
                            id="checkOut"
                            type="date"
                            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                        />
                    </div>

                    <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                        <label htmlFor="guests">Guests</label>
                        <input
                            min={1}
                            max={4}
                            id="guests"
                            type="number"
                            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16"
                            placeholder="0"
                        />
                    </div>

                    <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1'>
                        <img src={assets.searchIcon} alt="searchIcon" className='h-7' />
                        <span>Search</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Hero;
