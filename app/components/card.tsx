import React from 'react'
import Image from 'next/image';
interface Card {
    name: string;
    desc: string;
    image: string
}
export default function card({name, desc, image}: Card) {
  return (
    <div className='w-[300px] min-h-[400px] border rounded-md'>
        <div className=' h-[200px] '>
            <Image src={image} alt='image' width={300} height={200}/>
        </div>
        
        <div className='p-4'>
            <h3 className='font-bold text-xl truncate'>{name}</h3>
            <p className='text-sm text-slate-500'>{desc}</p>
        </div>
    </div>
  )
}
