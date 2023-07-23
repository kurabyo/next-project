"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/image'

export const ProductImages = ( { image } ) => {
    const [index, setIndex] = useState(0);

    return (
        <>
            <div className='image-container'>
                <Image src={urlForImage(image && image[index]).url()} width={400} height={400} alt='image' className='product-detail-image'/>
            </div>
            <div className='small-images-container'>
                {image?.map((e, i) => (
                    <Image key={e._key} src={urlForImage(e).url()} width={70} height={70} alt='image' className={i === index ? 'small-image selected-image' : 'small-imag'} onMouseEnter={() => setIndex(i)} />
                ))}
            </div>
        </>
    )
}
