import React from 'react'
import {data} from '../../dummy'
import Navbar from '../../components/navbar'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
async function getData(){
    try {
        const res = await axios.get('https://api-berita-indonesia.vercel.app/antara/terbaru/')
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export default async function page({params}: {params:{slug:number}}) {
    const data = await getData()
    const news = data.data.posts
    const item = news.find((news: any, index: number) => index == params.slug)

    if (!item) {
        return <div>data not found!</div>
    }
  return (
    <div>
        <Navbar/>
        <div className='flex justify-center mt-10'>
            <div className='w-11/12 p-6 g'>
                <h1 className=' text-7xl font-bold'>
                    {item.title}
                </h1>
                
               
                <div className='flex justify-between mt-6'>
                    <div className='w-8/12'>
                        <p className='font-medium text-lg text-slate-700'>
                           {item.description}
                        </p>
                    </div>
                    
                   
                </div>
                <div className='mt-10'>
                    <Link href={item.link}>
                        <p className='text-blue-500'>Click here for the news</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
