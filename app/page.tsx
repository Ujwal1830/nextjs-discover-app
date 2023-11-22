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

  const handleSearch = (value: any) => {
    if (value) {
      // console.log(value);
      setSearchInput(value+"in Delhi");
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
