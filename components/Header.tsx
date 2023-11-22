'use client'
import React, { useEffect, useState } from 'react'

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

    })

  return (
    <nav className='bg-[#faebff] md:flex md:justify-around md:items-center p-3 duration-500 shadow'>
        <div className='flex items-center justify-between duration-500'>
            <div className='flex gap-3 items-center cursor-pointer'>
                <svg width="38px" height="38px" viewBox="0 0 1024 1024" className="icon" version="1.1" fill="#000000">
                    <g strokeWidth="0"></g>
                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                    <g><path d="M764.6 341.5c0 127.9-221.5 343.7-221.5 343.7S321.7 469.4 321.7 341.5 420.9 110 543.2 110c122.3-0.1 221.4 103.6 221.4 231.5z" fill="#d58bea"></path><path d="M554 282v-16.9c0-2.9-2.4-5.3-5.3-5.3h-51.3c-2.9 0-5.3 2.4-5.3 5.3v27.3c0 9.8-8 17.8-17.8 17.8h-26.4c-2.9 0-5.3 2.4-5.3 5.3v51.3c0 2.9 2.4 5.3 5.3 5.3h15.5c4.7 0 12 3.8 12 8.4l0.9 35.1c0 8.7 2.6 15.7 11.3 15.7h11.1c3.8 0 7.2 1.3 9.9-0.9h37.6c4.4 0 8-3.6 8-8v-33.7c0-9.2 7.5-16.7 16.7-16.7h34.6c2.9 0 5.3-2.4 5.3-5.3v-60c0-6.5-5.2-11.7-11.7-11.7h-31.7c-7.5 0.2-13.4-5.7-13.4-13z" fill="#FFFFFF"></path><path d="M543 439.2h-55.6c-4.2 0-8.2-1.7-11.2-4.7s-4.7-7-4.7-11.2v-35.7c0-2.1-0.8-4.1-2.3-5.6s-3.5-2.3-5.6-2.3h-35.7c-8.8 0-15.9-7.1-15.9-15.9v-55.6c0-4.2 1.7-8.2 4.7-11.2s7-4.7 11.2-4.7h0.7v8h-0.7c-2.1 0-4.1 0.8-5.6 2.3s-2.3 3.5-2.3 5.6v55.6c0 4.4 3.5 7.9 7.9 7.9h35.7c4.3 0 8.2 1.7 11.3 4.7 3 3 4.7 7 4.7 11.3v35.7c0 4.4 3.5 7.9 7.9 7.9h55.6c4.4 0 7.9-3.5 7.9-7.9v-35.7c0-4.3 1.7-8.2 4.7-11.3 3-3 7-4.7 11.3-4.7h35.7c2.1 0 4.1-0.8 5.6-2.3s2.3-3.5 2.3-5.6v-55.6c0-4.4-3.5-7.9-7.9-7.9H567c-8.8 0-15.9-7.1-15.9-15.9v-35.7c0-4.4-3.5-7.9-7.9-7.9h-55.6c-4.4 0-7.9 3.5-7.9 7.9v35.7c0 4.3-1.7 8.2-4.7 11.3-3 3-7 4.7-11.3 4.7h-8.9v-8h8.9c2.1 0 4.1-0.8 5.6-2.3s2.3-3.5 2.3-5.6v-35.7c0-8.8 7.1-15.9 15.9-15.9h55.6c8.8 0 15.9 7.1 15.9 15.9v35.7c0 4.4 3.6 7.9 7.9 7.9h35.7c8.8 0 15.9 7.1 15.9 15.9v55.6c0 4.2-1.7 8.2-4.7 11.2s-7 4.7-11.2 4.7h-35.7c-2.1 0-4.1 0.8-5.6 2.3s-2.3 3.5-2.3 5.6v35.7c-0.1 8.6-7.3 15.8-16 15.8z" fill="#d58bea"></path><path d="M516.4 713l-5.1-4.8c-0.6-0.6-63.1-59-124.8-133.5C303.1 473.8 260.7 393 260.7 334.3c0-68.3 26.6-132.5 74.9-180.8s112.5-74.9 180.8-74.9c68.3 0 132.5 26.6 180.8 74.9s74.9 112.5 74.9 180.8c0 58.6-42.3 139.5-125.8 240.4-61.6 74.5-124.1 132.9-124.8 133.5l-5.1 4.8z m0-619.4c-64.3 0-124.7 25-170.2 70.5S275.7 270 275.7 334.3c0 68.5 66.5 163.3 122.3 230.7 50.9 61.5 102.3 112 118.4 127.4C532.5 677 584 626.5 634.9 565c55.8-67.4 122.3-162.2 122.3-230.7 0-64.3-25-124.7-70.5-170.2s-106-70.5-170.3-70.5z" fill="#999999"></path><path d="M516 943.8l-224.9-56.6-219.7 15.5 145.2-250.9 120.4-16 2 14.9-113.1 15-127.4 220 193.9-13.6 223.5 56.2 207.3-56.2 201.3 12-122.1-218.4-110.6-15 2-14.9 118.1 16L951 900.7l-226.3-13.5z" fill="#999999"></path></g>
                </svg>
                <h2 className='text-[25px] text-[#d58bea] font-bold tracking-tighter'>
                    Dis<span className='text-black/50'>cove</span>r
                </h2>
            </div>
            <div 
                className={`cursor-pointer duration-500 md:hidden ${isOpen && '-rotate-90'}`}
                onClick={()=>setIsOpen(!isOpen)}
            >
                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Layer_1"></g> <g id="Layer_2"> <g> <path d="M18,4c-0.6,0-1,0.4-1,1v14c0,0.6,0.4,1,1,1s1-0.4,1-1V5C19,4.4,18.6,4,18,4z"></path> <path d="M12,4c-0.6,0-1,0.4-1,1v14c0,0.6,0.4,1,1,1s1-0.4,1-1V5C13,4.4,12.6,4,12,4z"></path> <path d="M6,4C5.4,4,5,4.4,5,5v14c0,0.6,0.4,1,1,1s1-0.4,1-1V5C7,4.4,6.6,4,6,4z"></path> </g> </g> </g></svg>
            </div>

        </div>
        <ul className={` md:flex md:items-center z-[1] md:z-auto md:static absolute w-full left-0 md:w-auto md:pl-0 pl-7 ${isOpen ? 'opacity-100 top-[60px] bg-white' : 'opacity-0 top-[-200px]'} md:opacity-100  transition-all ease-in duration-500`}>
            <li className=' duration-300 mx-4 my-6 md:my-0 cursor-pointer text-[18px] hover:text-[#d58bea] hover:text-[20px]'>
                <span className='drop-shadow-2xl'>Home</span>
            </li>
            <li className=' duration-300 mx-4 my-6 md:my-0 cursor-pointer text-[18px] hover:text-[#d58bea] hover:text-[20px]'>
                <span className='drop-shadow-2xl'>About</span>
            </li>
            <li className=' duration-300 mx-4 my-6 md:my-0 cursor-pointer text-[18px] hover:text-[#d58bea] hover:text-[20px]'>
                <span className='drop-shadow-2xl'>Contact</span>
            </li>
        </ul>
    </nav>
  )
}

export default Header