import React from 'react'
import { Product } from '.'
import { client } from '../../sanity/lib/client'

export const MayLikePRoducts = async () => {

    const products = await getProducts()

  return (
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
  )
}

const getProducts = async () => {
  
    const query = `*[_type == "product"]`
    const products = await client.fetch(query)
  
    return products
  }
