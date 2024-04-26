'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Data from '../../shared/data'
const GameList = () => {
    const [games,SetGame]=useState([])
    useEffect(()=>{
        SetGame(Data.GameList)
    },[])
  return (
    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 mt-4'>
 

{games && games.map((item)=>(

<div className='flex flex-col items-center cursor-pointer ' key={item.id}>

<img className='hover:animate-bounce transition-all duration-150' src={item.image} width={45} height={45}/>
<h2 className='text-[14px] text-center'>{item.name}</h2>

</div>))} 

    </div>
  )
}

export default GameList