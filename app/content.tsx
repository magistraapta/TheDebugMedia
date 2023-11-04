import React from 'react'
import Card from './components/card'
import Link from 'next/link'
import {data} from './dummy'
import axios from 'axios'

async function getData(){
    try {
        const res = await axios.get('https://api-berita-indonesia.vercel.app/antara/terbaru/')
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export default async function content() {
    const data = await getData()
    const news = data.data.posts
  return (
    <div className='flex justify-center'>
        <div className='grid grid-cols-4 gap-4 w-11/12 p-6'>
            {news.map((item: any, index:number)=>(
                <Link key={index} href={`/detail/${index}`}>
                    <Card  name={item.title} desc={item.description} image={item.thumbnail}/>
                </Link>
            ))}
        </div>
    </div>
  )
}
