import { FooterBanner, HeroBanner, Product } from '@/components'
import React from 'react'
import { client } from '../../sanity/lib/client'

export const getProducts = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
  
  return products
}

export const getBanner = async () => {
  const query = '*[_type == "banner"]'
  const banner = await client.fetch(query)
  
  return banner
}

const Home = async () => {

  const products = await getProducts()
  const banner = await getBanner()

  return (
    <>
      <HeroBanner heroBanner={banner.length && banner[0]}/>

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Swords of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map( p => <Product key={p._id} product={p}/>)}
      </div>

      <FooterBanner footerBanner={banner.length && banner[0]}/>
    </>
  )
}

export default Home
