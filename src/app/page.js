import GameList from '@/components/Home/GameList'
import Hero from '@/components/Home/Hero'
import Search from '@/components/Home/Search'
import React from 'react'

const page = () => {
  return (
    <div className='px-5 sm:px-7 md:px-10 mt-9'>

      <Hero/>
      <Search/>
      <GameList/>
    </div>
  )
}

export default page