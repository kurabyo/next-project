import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/image'

export const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <Image src={urlForImage(image && image[0]).url()} width={250} height={250} alt={name} className='product-image'/>
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}
