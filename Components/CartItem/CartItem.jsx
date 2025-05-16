import React, { useContext } from 'react'
import './CartItem.css'
import { ResidenceContext } from '../../Context/ResidenceContext'
import remove_icon from '../Assets/cross_icon.png'

const CartItem = () => {
    const {getTotalCartAmount,all_design,cartItems,removeFromCart} = useContext(ResidenceContext);
  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_design.map((e)=>{
        if(cartItems[e.id]>0){
          return <div>
        <div className='cartitems-format cartitems-format-main'>
            <img src={e.image} alt='' className='carticon-product-icon'/>
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-quantity'> {cartItems[e.id]}</button>
            <p>${e.new_price*cartItems[e.id]}</p>
            <img className='remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=''/>
        </div>
        <hr/>
     </div>
        }else{
          return null
        }
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
          <h2>cart Total</h2>
          <div>
            <div className='cartitems-total-item'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='cartitems-total-item'>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}
export default CartItem