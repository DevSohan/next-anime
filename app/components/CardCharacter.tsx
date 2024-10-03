import React from 'react'
import { Character } from '../lib/dataFetching'
import Image from 'next/image'

const CardCharacter = ({info}: {info: Character}) => {
  const statusBg = info.status === 'Alive' ? 'bg-green-500' : info.status === 'Dead' ? 'bg-red-500' : 'bg-gray-500'
  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 shadow-md rounded-xl shadow-white border border-white/50 items-center flex flex-col relative'>
      <img className='max-w-32 mx-auto mb-4' src={info.image} alt={info.name} />
      <h3 className='font-bold text-lg'>{info.name}</h3>
      <p className='text-sm'>Origin: {info.origin.name}</p>
      <div className={`${statusBg} absolute w-16 h-16 top-4 right-4 bg-green-500 rounded-full flex items-center justify-center text-xs antialiased font-bol rotate-45`}>{info.status}</div>
    </div>
  )
}

export default CardCharacter
