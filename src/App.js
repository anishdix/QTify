import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api'
import Section from './components/Section/Section'

const App = () => {
  const [topAlbumsData,setTopAlbumsData]=useState([])
  const [NewAlumsData,setNewAlumsData]=useState([])
  const [songsData,setSongsData]=useState([])
  const [filter,setFilter]=useState([])
  const [toggle,setToggle]=useState(false)
  const [value,setValue]=useState(0)

  const handleToggle=()=>{
      setToggle(!toggle)
  }
  const handleChange=(e,newValue)=>{
      setValue(newValue)
  }


  const generateSongsData=(value)=>{
    let key;
    if(value===0)
    {
      filterData(songsData);
      return 
    }
    else if(value===1)
    {
      key ="rock";

    }
    else if(value===2)
    {
      key="pop";
    }
    const res=songsData.filter((item)=>item.genre.key===key)
    filterData(res)

  }
  const filterData=(songs)=>{
    setFilter(songs)
  }
const generateAllSongData=async ()=>{
  try{
    const res=await fetchSongs()
    setSongsData(res);
    setFilter(res)

  }
  catch(e)
  {
    console.error(e)
  }
}

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
    generateSongsData(value)
  },[value])

  useEffect(()=>{
   generateTopAlbums()
   generateNewAlbums()
   generateAllSongData()
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
      <Section data={filter} title="Songs" type="song" value={value} handleChange={handleChange} isSong={true}/>
    </div>
  );
}

export default App

