import React from 'react'
interface Card {
    name: string;
    desc: string;
}
export default function card({name, desc}: Card) {
  return (
    <div className='w-[300px] h-[400px] border rounded-md'>
        <div className=' bg-blue-600 h-3/6 '>
        </div>
        
        <div className='p-4'>
            <h3 className='font-bold text-xl'>{name}</h3>
            <p className='text-sm text-slate-500'>{desc}</p>
        </div>
    </div>
  )
}
