import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>SMALL TEXT</p>
        <h3>MID ETXT</h3>
        <Image alt='banner-img' className='hero-banner-image'/>

        <div>
          <Link href={'/product/id'}>
            <button type='button'>BUTON</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>DESCSFD</p>
          </div>
        </div>
      </div>
    </div>
  )
}
