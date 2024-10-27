import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MyProjectsContainer from '@/components/MyProjectsContainer'
import React from 'react'

export default function Home() {
  return (
    <div className='w-full h-full bg-black'>
      <Header/>
      <MyProjectsContainer/>
      <Footer/>
    </div>
  )
}
