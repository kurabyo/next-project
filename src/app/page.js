import { FooterBanner, HeroBanner } from '@/components'
import React from 'react'
import { client } from '../../sanity/lib/client'

export const getServerSideProps = async () => {
  console.log('huita')
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
  
  return {
    props: {
      products
    }
  }
}

const Home = ({ products }) => {
  return (
    <>
      <HeroBanner/>

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Swords of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map( p => p.name)}
      </div>
      <FooterBanner/>
    </>
  )
}

export default Home
