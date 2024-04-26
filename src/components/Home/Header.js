'use client'
import Image from 'next/image'
import React from 'react'
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { CiLogin } from "react-icons/ci";
import {  useSession, signIn, signOut } from 'next-auth/react'
const Header = () => {
  const { data: session } = useSession()

  return (
    <div className='flex justify-between p-3 border-b-[2px] border-[#FF3366]'>
{/* logo */}
<img src="/logo.png" width={40} alt='player hub logo'/>



<div className='flex justify-between '>
  <button className='flex justify-centre items-center space-x-1 bg-black p-2 px-3 text-white rounded-full'>
    <span className='hidden sm:block ]'>Create Post</span>
  <HiOutlinePencilSquare className='text-[20px]'/>
  </button>
 
 { session ? (
  <div className='flex justify-between '>
  <button className='flex justify-centre items-center space-x-1 bg-white text-gray-500 p-2 px-3 border-[1px] rounded-full' onClick={() => signOut()}>
    <span className='hidden sm:block'>Logout</span> <CiLogin className="text-black text-[20px]" />
  </button>
  <img src={session.user.image} width={40} height={40} className='rounded-full' alt='user profile' />
</div>

 ):(
 <div className='flex justify-between '>
   <button className='flex justify-centre items-center space-x-1 bg-white text-gray-500 p-2 px-3 border-[1px] rounded-full' onClick={()=>signIn()}>
    
    <span className='hidden sm:block' >Sign In</span> <CiLogin className="text-black text-[20px]"/></button>
  <Image src ="/avatar.jpeg" width={40} height={40} className='rounded-full' alt='user profile'/>
  </div>
 )}
 
  
</div>


    </div>
  )
}

export default Header