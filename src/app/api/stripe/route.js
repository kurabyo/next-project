// import Stripe from "stripe";

// const stripe = new Stripe(process.env.NEX_SECRET_STRIPE_KEY)

// export default async function handler (req, res) {
//     if(req.method === 'POST') {
//         try {

//         } catch (error) {
//             res.status(500).json({ statusCode: 500, message: error.message})
//         }
//     }
// }

import { NextResponse } from 'next/server';

const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);

export async function POST(request) {
  const data = await request.json()
  const origin = await request.headers.get('origin')


  const params = {
    submit_type: 'pay',
    payment_method_types: ['card'],
    billing_address_collection: 'auto',
    shipping_options: [
      { shipping_rate: 'shr_1NYAigDYf9FSYHmeid7qUPgt' },
      { shipping_rate: 'shr_1NYAjWDYf9FSYHmeqCHwzogK' }
    ],
    line_items: data.map((item) => {
      const img = item.image[0].asset._ref;
      const newImage = img.replace('image-', 'https://cdn.sanity.io/images/vfxfwnaw/production/').replace('-webp', '.webp');

      return {
        price_data: { 
          currency: 'usd',
          product_data: { 
            name: item.name,
            images: [newImage],
          },
          unit_amount: item.price * 100,
        },
        adjustable_quantity: {
          enabled:true,
          minimum: 1,
        },
        quantity: item.quantity
      }
    }),
    mode: 'payment',
    success_url: `${origin}/?success=true`,
    cancel_url: `${origin}/?canceled=true`,
  }


  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create(params);

  return NextResponse.json(session)
}