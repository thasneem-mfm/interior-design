import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
  const handleImageClick = () => {
     if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
    window.scrollTo(0, 0);
  }
  };
  return (
    <div className='item'>
     <Link to={`/product/${props.id}`}><img onClick={handleImageClick} src={props.image} alt={props.name}/> </Link>
    <p>{props.name}</p>
    <div className='items-prices'>
      <div className='item-prices-new'>
        Rs.{props.new_price}
      </div>
      <div className='item-prices-old'>
        Rs.{props.old_price}
      </div>

    </div>
    
    </div>
  );
};
export default Item;
