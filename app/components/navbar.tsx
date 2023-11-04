import React from 'react'
import Link from 'next/link'


export default function navbar() {
  return (
    <div className='flex justify-center shadow-md'>
        <div className='flex items-center justify-between p-6 w-11/12'>
            <Link href={'/'} className='w-5/12 '>
            <p className='text-2xl font-bold'>TheDebugMedia</p>
            </Link>
            
            <ul className='w-4/12 flex gap-9 text-md font-semibold '>
                <li className='px-2 rounded-sm hover:bg-slate-200'>Article</li>
                <li className='px-2 rounded-sm hover:bg-slate-200'>Course</li>
                <li className='px-2 rounded-sm hover:bg-slate-200'>About</li>
            </ul>
            <div className='w-3/12 flex justify-end'>
                <button>Login</button>
            </div>
        </div>
    </div>
  )
}
