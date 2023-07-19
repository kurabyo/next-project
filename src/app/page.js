import { Footer, HeroBaner } from '@/components'
import React from 'react'

const Home = () => {
  return (
    <>
      <HeroBaner/>

      <div className='product-heading'>
        <h2>Best Selling Products</h2>
        <p>Swords of many variations</p>
      </div>

      <div className='product-container'>
        {['prod1', 'prod2'].map(p => p)}
      </div>

      <Footer/>
    </>
  )
}

export default Home
