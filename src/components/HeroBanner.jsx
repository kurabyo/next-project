import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '../../sanity/lib/image'

export const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <Image src={urlForImage(heroBanner.image).url()} alt='banner-img' className='hero-banner-image' width={450} height={450}/>

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type='button'>{heroBanner.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
