import React from 'react'
import Card from './components/card'
const data = [
    {
        title: 'build app using Flutter',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et esse ab, doloribus debitis molestias iste vitae aliquam. Veritatis eius magni quaerat modi ipsam distinctio unde mollitia aliquid ipsum nam. Tenetur?'
    },
    {
        title: 'Implementing Clean Architecture',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et esse ab, doloribus debitis molestias iste vitae aliquam. Veritatis eius magni quaerat modi ipsam distinctio unde mollitia aliquid ipsum nam. Tenetur?'
    },
    {
        title: 'Fetch Data from Firebase',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et esse ab, doloribus debitis molestias iste vitae aliquam. Veritatis eius magni quaerat modi ipsam distinctio unde mollitia aliquid ipsum nam. Tenetur?'
    },
    {
        title: 'Fetch Data from Firebase',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et esse ab, doloribus debitis molestias iste vitae aliquam. Veritatis eius magni quaerat modi ipsam distinctio unde mollitia aliquid ipsum nam. Tenetur?'
    },
    {
        title: 'Fetch Data from Firebase',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et esse ab, doloribus debitis molestias iste vitae aliquam. Veritatis eius magni quaerat modi ipsam distinctio unde mollitia aliquid ipsum nam. Tenetur?'
    },
    {
        title: 'Fetch Data from Firebase',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et esse ab, doloribus debitis molestias iste vitae aliquam. Veritatis eius magni quaerat modi ipsam distinctio unde mollitia aliquid ipsum nam. Tenetur?'
    },
    {
        title: 'Fetch Data from Firebase',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et esse ab, doloribus debitis molestias iste vitae aliquam. Veritatis eius magni quaerat modi ipsam distinctio unde mollitia aliquid ipsum nam. Tenetur?'
    },
    {
        title: 'Fetch Data from Firebase',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et esse ab, doloribus debitis molestias iste vitae aliquam. Veritatis eius magni quaerat modi ipsam distinctio unde mollitia aliquid ipsum nam. Tenetur?'
    },
]
export default function content() {
  return (
    <div className='flex justify-center'>
        <div className='grid grid-cols-4 gap-4 w-11/12 p-6'>
            {data.map((item,index: number)=>(
                <Card key={index} name={item.title} desc={item.desc}/>
            ))}
        </div>
    </div>
  )
}
