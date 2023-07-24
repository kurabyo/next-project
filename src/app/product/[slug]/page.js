import React from 'react'
import { ProductImages } from '@/components/ProductImages'
import { client } from '../../../../sanity/lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Product } from '@/components'

const ProductDetails = async ({ params: { slug } }) => {

  const { image, price, details, name } = await getProduct(slug)
  const products = await getProducts()

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
          <div className='quantity'>
            <h3>Quantity: </h3>
            <p className='quantity-desc'>
              <span className='minus' onClick=''>
                <AiOutlineMinus />
              </span>
              <span className='num' onClick=''>
                0
              </span>
              <span className='plus' onClick=''>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className='buttons'>
            <button type='button' className='add-to-cart' onClick=''>Add to Cart</button>
            <button type='button' className='buy-now' onClick=''>Buy Now</button>
          </div>

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

