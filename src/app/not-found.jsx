import React from 'react'
import image from './image/error.png'
import Image from 'next/image'

const notFound = () => {
  return (
    <>
      <Image className='flex  justify-center items-center h-[100vh] w-[100vw]' src={image}/>
    </>
  )
}

export default notFound 




