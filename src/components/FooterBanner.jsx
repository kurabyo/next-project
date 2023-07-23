import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/image'

export const FooterBanner = ({ footerBanner: {discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image, desc} }) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <Image src={urlForImage(image).url()} width={400} height={400} alt='footer-banner-image' className='footer-banner-image'/>
      </div>
    </div>
  )
}
