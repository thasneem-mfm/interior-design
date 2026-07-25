import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.jpeg"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ResidenceContext } from '../../Context/ResidenceContext';


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ResidenceContext);
  return (
    <div className='productdisplay'>
     <div className='productdisplay-left'>
       <div className='productdisplay-img'>
         <img className='productdisplay-main-img' src={product.image} alt=''/>
       </div>
     </div>
     <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-stars'>
          <div className='star-row'>
           <img className='star-icon' src={star_icon} alt=''/>
           <img className='star-icon' src={star_icon} alt=''/>
           <img className='star-icon' src={star_icon} alt=''/>
           <img className='star-icon' src={star_icon} alt=''/>
           <img className='star-icon' src={star_dull_icon} alt=''/>
           </div>
           <p className='star-count'>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-price-old'>${product.old_price}</div>
          <div className='productdisplay-right-price-new'>${product.new_price}</div>
        </div>
        <div className='productdisplay-right-description'>{product.description}</div>
        <button onClick={()=>{addToCart(product.id)}}> ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category : </span>{product.category}</p>
         <p className='productdisplay-right-category'><span>Tags : </span>Modern,Latest,Luxary and Budjet-Friendly </p>
    

        </div>
     </div>
  );
};
export default ProductDisplay;