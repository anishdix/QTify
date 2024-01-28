import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import { fetchNewAlbums, fetchTopAlbums } from './api/api'
import Section from './components/Section/Section'

const App = () => {
  const [topAlbumsData,setTopAlbumsData]=useState([])
  const [NewAlumsData,setNewAlumsData]=useState([])

  
  const generateTopAlbums=async()=>{
    try{
      const data=await fetchTopAlbums();
      // console.log(data)
      setTopAlbumsData(data);
    }
    catch(e)
    {
      console.error(e)
    }
  }

  const generateNewAlbums=async()=>{
      try{
        const data=await fetchNewAlbums();
        // console.log(data)
        setNewAlumsData(data);
      }
      catch(e)
      {
        console.error(e)
      }
  }

  useEffect(()=>{
   generateTopAlbums()
   generateNewAlbums()
  },[])
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* {
        
        topAlbumsData.map((topAlbum)=>
          (<Card data={topAlbum} type="album" key={topAlbum.id}/>)
        )

      } */}
      <Section data={topAlbumsData} title="Top Albums" type="album"/>
      <Section data={NewAlumsData} title="New Albums" type="album"/>
    </div>
  );
}

export default App

