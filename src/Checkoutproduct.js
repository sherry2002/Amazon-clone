import React from 'react';
import './checkproduct.css';
import StarIcon from '@material-ui/icons/Star';
import { Button } from '@material-ui/core';
import {useStateValue} from './Stateprovider';

function Checkoutproduct({id ,title,price, ratings, image}) {
    const [{basket},dispach]= useStateValue();
    const removeFromBasket=()=>{
         dispach({
             type:'removeFromBasket',
             id:id,
            
         })
    }
    return (
        <div className='items'>
        <div className='checkoutproduct'>
           
              <img className='img_product' alt='' src={image} />
             
                 
              <div className='product_info'>   
            

             <p>{title}</p>
              <p>
                  <small>$</small> 
                 <strong>{price}</strong> </p>
              <div className='product_rate'>
                  {Array(ratings).fill().map((_,i)=>(
                     <span ><StarIcon/></span>
                  ))} 
                   
            </div >
            <Button className="btn1" onClick={removeFromBasket}>Remove To Basket</Button>
        
            </div>
          
      </div>
      </div>
    )
}

export default Checkoutproduct;
