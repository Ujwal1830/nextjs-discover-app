'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PlaceList from '@/components/PlaceList'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {

  const [placeList, setPlaceList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getPlaceList = async(value:string)=>{
    const result = await fetch(`/api/google-place-api?q=`+value)
    const data = await result.json();

    setPlaceList(data.data.results);
    // console.log(data.data.results);
  }

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          resolve,
          (error) => {
            reject(error);
          }
        );
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  };

  const handleSearch = async(value: any) => {
    if (value) {
      // console.log(value);
      try {
        const position:any = await getCurrentLocation();
        const locationString = `${position.coords.latitude},${position.coords.longitude}`;
        setSearchInput(`${value} in ${locationString}`);
      } catch (error) {
        console.error('Error getting current location', error);
      }
    }
  };
  
  useEffect(() => {
    if (searchInput) {
      getPlaceList(searchInput);
    }
  }, [searchInput]);

  useEffect(()=>{getPlaceList("Hotels in Delhi");},[])

  return (
    <div className="min-h-screen">
      {/* NavBar */}
      <Header />

      {/* Hero Section */}
      <div className='min-h-screen'>
        <Hero searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch} />
        <PlaceList placeList={placeList}  />
      </div>
    </div>
  )
}
