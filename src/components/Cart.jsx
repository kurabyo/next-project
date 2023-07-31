'use client'
import React from 'react'
import { useStateContext } from '../../context/StateContext'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping, AiOutlineDelete } from 'react-icons/ai'
import { urlForImage } from '../../sanity/lib/image'
import getStripe from '../../sanity/lib/getStripe'
import { toast } from 'react-hot-toast'



export const Cart = () => {
  const { showCart, setShowCart, totalQuantities, totalPrice, cartItems, toggleCartItemQty, onRemove } = useStateContext()

  const handleCheckOut = async () => {
    const stripe = await getStripe()

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    })

    if(response.statusCode === 500) return

    const data = await response.json()
    toast.loading('Redirecting...')
    stripe.redirectToCheckout({ sessionId: data.id })
  }

  return (
    <>
      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      {showCart &&
        <div className='cart-wrapper'>
          <div className='cart-container'>
            <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
              <AiOutlineLeft />
              <span className='heading'>Your cart</span>
              <span className='cart-num-items'>({totalQuantities} items)</span>
            </button>
            {cartItems.length < 1 && (
              <div className='empty-cart'>
                <AiOutlineShopping size={150} />
                <h3>Your shopping bag is empty</h3>
                <Link href='/'>
                  <button type='button' onClick={() => setShowCart(false)} className='btn'>
                    Continue shopping
                  </button>
                </Link>
              </div>)}

            <div className='product-container'>
              {cartItems.length >= 1 && cartItems.map((item) => (
                <div className='product' key={item._id}>
                  <Image src={urlForImage(item?.image[0]).url()} className='cart-product-image' width={180} height={150} alt='image' />
                  <div className='item-desc'>
                    <div className='flex top'>
                      <h5>{item.name}</h5>
                      <h4>${item.price}</h4>
                    </div>
                    <div className='flex bottom'>
                      <div>
                        <p className='quantity-desc'>
                          <span className='minus' onClick={() => toggleCartItemQty(item._id, 'dec')} >
                            <AiOutlineMinus />
                          </span>
                          <span className='num' >
                            {item.quantity}
                          </span>
                          <span className='plus' onClick={() => toggleCartItemQty(item._id, 'inc')}>
                            <AiOutlinePlus />
                          </span>
                        </p>
                      </div>
                      <button type='button' className='remove-item' onClick={() => onRemove(item._id)}>
                        <AiOutlineDelete/>
                      </button>
                    </div>
                  </div>
                </div>))}
            </div>
            {cartItems.length >= 1 && (
              <div className='cart-bottom'>
                <div className='total'>
                  <h3>Subtotal:</h3>
                  <h3>${totalPrice}</h3>
                </div>
                <div className='btn-container'>
                  <button type='button' className='btn' onClick={() => handleCheckOut()}>
                    Pay with Stripe
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>}
    </>
  )
}
