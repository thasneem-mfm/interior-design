import React from 'react'
import './Breadcrum.css'
const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME<span>&gt;</span>Residence<span>&gt;</span>{product?.category}<span>&gt;</span>{product?.name}

    </div>
  )
}

export default Breadcrum;