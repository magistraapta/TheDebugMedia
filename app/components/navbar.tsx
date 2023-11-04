import React from 'react'

export default function navbar() {
  return (
    <div className='flex justify-center shadow-md'>
        <div className='flex items-center justify-between p-6 w-11/12'>
            <p className='w-5/12 text-2xl font-bold'>
                TheDebugMedia
                </p>
            <ul className='w-4/12 flex gap-9 text-md font-semibold'>
                <li>Article</li>
                <li>Course</li>
                <li>About</li>
            </ul>
            <div className='w-3/12 flex justify-end'>
                <button>Login</button>
            </div>
        </div>
    </div>
  )
}
