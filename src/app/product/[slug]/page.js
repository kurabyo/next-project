import React from 'react'
import { ProductImages } from '@/components/ProductImages'
import { client } from '../../../../sanity/lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Product } from '@/components'
import { Quantity } from '@/components/Quantity'

const ProductDetails = async ({ params: { slug } }) => {

  const product = await getProduct(slug)
  const products = await getProducts()
  const { image, price, details, name } = product
  
  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <ProductImages image={image} />
        </div>
        <div className='product-detail-desc'>
          <h1>{name}</h1>
          <div className='reviews'>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className='price'>${price}</p>
          <Quantity product={product}/>

        </div>
      </div>
      <div className='maylike-products-wrapper'>
        <h2>You may also like</h2>
        <div className='marquee'>
          <div className='maylike-products-container track'>
            {products.map((e) => (
              <Product key={e._id} product={e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

export const getProduct = async (slug) => {

  const query = `*[_type == "product" && slug.current == '${slug}'][0]`
  const product = await client.fetch(query)

  return product
}

export const getProducts = async () => {

  const query = `*[_type == "product"]`
  const products = await client.fetch(query)

  return products
}

