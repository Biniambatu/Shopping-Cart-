
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css'
export const ProductCard = ({product}) => {
   const {addToCart,removeFromCart,cartList} = useCart()
   const {id,name, price, image, auther} = product;
   const [isInCart, setIsInCart] = useState(false)
   useEffect(()=>{
      const productIsInCart = cartList.find((find) => find.id === product.id)
      if(productIsInCart){
         setIsInCart(true)
      }else{
         setIsInCart(false)
      }
   },[cartList,id])
   
  return (
    <div className="productCard">
       <img src={image} alt=""/>
       <p className="name">{name}</p>
       <p>{auther?.name}</p>
       <div className="action">
          <p>${price}</p>
          {isInCart ? (<button className='remove' onClick={()=>removeFromCart(product)}>Remove</button>) : (<button onClick={()=>addToCart(product)}>Add To Cart</button>)}
       </div>
    </div>
  )
}
