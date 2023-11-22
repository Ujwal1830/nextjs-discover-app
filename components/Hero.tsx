import category from '@/data/category';
import Image from 'next/image';
import React from 'react';

function Hero({ setSearchInput, handleSearch }:any) {
  
  return (
    <div className='text-center '>
      <div>
        <Image src='/bg.png' alt='hero-image' width={1000} height={100} className='transition-all duration-700 w-full absolute mt-[-70px] z-[-1]' />

        <div className='pt-10 relative'>
          <h2 className='text-[43px] text-[#d58bea] tracking-widest font-bold transition-all duration-500  hover:text-[46px] uppercase'>
            Dis<span className='text-black/50'>cove</span>r
          </h2>
          <h2 className='text-[20px] font-light'>your amazing city</h2>
          <div className='relative mt-5 mx-4 sm:mx-[30%]'>
            <div className='flex items-center'>
              <input
              onChange={(e)=>{setSearchInput(e.target.value)}}
                type="text"
                placeholder='Search anything'
                className='bg-[#faebff] px-4 py-4 text-xl rounded-full border-[#d58bea] border-x-4 flex-1 outline-none transition-all duration-200 hover:scale-105'
              />
              <svg onClick={handleSearch} className='ml-2 absolute right-2 top-1 bg-white cursor-pointer p-1 rounded-full' width="50px" height="50px" viewBox="0 0 24 24" fill="none">
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <g clip-path="url(#clip0_15_152)">
                    <rect width="24" height="24"></rect>
                    <circle cx="10.5" cy="10.5" r="6.5" stroke="#d58bea" strokeLinejoin="round"></circle>
                    <path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#d58bea"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_15_152">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </div>
          </div>

          <div className='mt-5 flex flex-col items-center'>
            <h2> Or Browse the category</h2>
            <div className='grid grid-cols-3 md:grid-cols-7 w-[70%] gap-3 mt-3'>
              {
                category.map((item, index) => (
                  <div className='flex items-center justify-center'>
                    <div 
                      onClick={()=>handleSearch(item.name)}
                      key={index}
                      className='bg-white border-2 w-14 h-14 p-3.5 rounded-full flex items-center justify-center drop-shadow-lg transition-all duration-200 hover:scale-125'
                    >
                      <Image src={item.icon} alt={item.name} width={30} height={30} />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

// AIzaSyC1cfzoXItn5p4jZraZdUKnGw_NUwBddh0
// AIzaSyCv-K8IB7t2DsofaFYVecU5t4SFXiWOjtA