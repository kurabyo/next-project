'use client'
import React, {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useStateContext } from '../../context/StateContext'

export const Quantity = ({product}) => {

    const { decQty, incQty, qty, onAdd } = useStateContext()

  return (
    <>
              <div className='quantity'>
            <h3>Quantity: </h3>
            <p className='quantity-desc'>
              <span className='minus' onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className='num' onClick=''>
                {qty}
              </span>
              <span className='plus' onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className='buttons'>
            <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type='button' className='buy-now' onClick=''>Buy Now</button>
          </div>
    </>
  )
}
