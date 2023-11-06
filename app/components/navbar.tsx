import React from 'react'
import Link from 'next/link'


export default function navbar() {
  return (
    <div className='flex justify-center shadow-md'>
        <div className='flex items-center justify-between p-6 w-11/12'>
            <Link href={'/'} className='w-5/12 '>
            <p className='text-2xl font-bold'>TheDebugMedia</p>
            </Link>
        </div>
    </div>
  )
}
