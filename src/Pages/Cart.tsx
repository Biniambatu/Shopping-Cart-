import React from 'react'

import { CartCard } from '../component'
import { useTitle } from '../hooks/useTitle'
import { useCart } from '../context/CartContext'
export const Cart = () => {
   useTitle("Cart")
   const {total} = useCart()
  
   const products = [
    {id:1, name: "Sony", price: 124, image:"image"},
    {id:2, name: "Apple", price: 454, image:"image"},
    {id:3, name: "Dell", price: 94, image:"image"}
  ] 
  return (
    <main>
     <section className='cart'>
      <h1>Cart Items: {products.length} | $ {total}</h1>
      {products.map((product)=>(
        <CartCard key={product.id} product={product} />
      ))}
      
     </section>
    </main>
  )
}

