import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
//import { Link } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { useStateValue } from './Stateprovider';
import { auth } from './Firebase';

function Header() {
    const [{basket,user},dispach]= useStateValue();
   const handleAuth=()=>{
       if (user){
           auth.signOut();
       }
   }

    return (
        <div className='header'>
       
           <Link to='/'>
            <img className='header_img' src='https://pngimg.com/uploads/amazon/amazon_PNG25.png' alt=''/>
           </Link>
           
        <div className='header_search'>
         <input className='header_input' type='text' /> 
         <div className='search_icon'>
         <SearchIcon></SearchIcon>
         </div>
        </div>  

        <div className='header_nav'>
            <Link to={!user && '/login'}>
            <div onClick={handleAuth} className='header_option'>
               <span className='header_op1'>Hi {user ? user.email:'Guest'}</span>
               <span className='header_op2'>{ user ? 'Sign Out' : 'Sign In'}</span>
           </div>
            </Link>
           <Link to='/orders'>
           <div className='header_option'>
               <span className='header_op1'>returns</span>
               <span className='header_op2'>& Orders</span>
           </div>
           </Link>
           <div className='header_option'>
               <span className='header_op1'>Your</span>
               <span className='header_op2'>Prime</span>
           </div>
           <Link to="/checkout">
           <div className='basket'>
           <ShoppingBasketIcon className='basket1'></ShoppingBasketIcon>
           <span className='header_op order_items'>{basket?.length}</span>
           </div>
           
           </Link>
          
        </div>
        </div>

    )
}

export default Header;
