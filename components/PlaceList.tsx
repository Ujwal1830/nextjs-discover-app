'use client'

import React, { useState } from 'react'
import PlaceCard from './PlaceCard'
import SideDrawer from './SideDrawer'
import Skeleton from './Skeleton';

function PlaceList({ placeList }:any) {

  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<any>([]);

  return (
    <div className='px-[10px] md:px-[120px] mt-7'>
      <h2 className='text-[20px] font-bold'>Search Result</h2>
      <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 z-10'>
        {
          placeList.map((place:any, index:number)=>(
            <div key={index} className='z-10' onClick={()=>{setSelectedPlace(place); setToggleSideBar(true)}}>
              <PlaceCard place={place} />
            </div>
          ))
        }
      </div>
      { selectedPlace?.name ? <div className='fixed top-0 right-0 z-10 '>
          <SideDrawer place={selectedPlace} close={()=>setSelectedPlace([])} />
        </div> : null
      }

      { placeList.length == 0 && <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 z-10'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <Skeleton />
        ))}
      </div>}
    </div>
  )
}

export default PlaceList