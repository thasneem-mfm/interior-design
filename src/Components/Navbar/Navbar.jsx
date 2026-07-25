import React, { useContext, useState, useRef } from 'react';
import './Navbar.css'
import{Link} from 'react-router-dom';
import logo from '../Assets/residence.png'
import cart_icon from '../Assets/cart_icon.png'
import { ResidenceContext } from '../../Context/ResidenceContext';
import nav_dropdown from '../Assets/nav_dropdown.png'

 export const Navbar = () => {
    const [ menu,setMenu] = useState("Residence");
    const{getTotalCartItems} = useContext(ResidenceContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
      menuRef.current.classList.toggle('new-menu-visible');
      e.target.classList.toggle('open');
    }
      
  
  return (
    <div className='Navbar'>
        <div className="nav-logo">
         <img src={logo} alt=''/>
            <p>FLUXA</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=""/>
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("Residence")}}><Link style={{textDecoration: 'none' , color: '#626262'}} to='/'>Residence</Link>{menu==="Residence"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("bathroom")}}><Link style={{textDecoration: 'none' , color: '#626262'}}  to='/Bathroom'>Bathroom</Link>{menu==="bathroom"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("bedroom")}}><Link style={{textDecoration: 'none' , color: '#626262'}}  to='/Bedroom'>Bedroom</Link>{menu==="bedroom"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kitchen")}}><Link style={{textDecoration: 'none' , color: '#626262'}}  to='/Kitchen'>Kitchen</Link>{menu==="kitchen"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("livingroom")}}><Link style={{textDecoration: 'none' , color: '#626262'}}  to='/Livingroom'>Livingroom</Link>{menu==="livingroom"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
          <Link to='/login'><button>Login</button></Link>
         <Link  to='/cart'><img src={cart_icon} alt=''/></Link> 
<div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>

    </div>
  )
}
export default Navbar;
