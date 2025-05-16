import React, { useContext } from 'react'
import './CSS/ResidenceCategory.css'
import Item from '../Components/Item/Item'
import {ResidenceContext} from '../Context/ResidenceContext'


 const ResidenceCategory = (props) => {
  const {all_design} = useContext(ResidenceContext);
  const filteredDesigns = all_design.filter(item => props.category === item.category);
  const designsToShow = filteredDesigns.slice(0, 10);
  return (
    <div className='Residencecategory-indexsort'>
      <p>
        <span>Showing 1-{designsToShow.length}</span>/ {filteredDesigns.length}products
     </p>
    
    <div className='Residencecategory-products'>
      {designsToShow.length > 0 ? (
       designsToShow.map((item)=> (
           <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
     ))
   ) : (
    <p>No designs found in this category.</p>
   ) }
    <div className='Residencecategory-loadmore'>
      Explore More
    </div>
      </div>
    </div>
  );
};

export default ResidenceCategory;