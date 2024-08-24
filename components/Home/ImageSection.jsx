import Image from 'next/image'
import React from 'react'

const ImageSection = () => {
  return (
    <div className='px-28 md:pl-4 py-4 md:py-20 flex'>
      <div className=' h-80 w-full rounded-lg shadow-lg  flex justify-center'>
        
        <Image
      // src='https://i.ibb.co/c3yJPhv/DDI-282931-2-X2.jpg'
      src='/DP.png'
      alt='DP'
      height={350}
      width={300}
      loading='lazy'
      // className="rounded-full aspect-square object-cover"
      />
        
        

      </div>
      
      
      

    </div>
  )
}

export default ImageSection