import React from 'react';
import './product.css';
import StarIcon from '@material-ui/icons/Star';
import { Button } from '@material-ui/core';
import { useStateValue } from './Stateprovider';

function Product({id, image, title,ratings, price}) {
    const [{basket}, dispach]=useStateValue();
    console.log(basket)
    const addtoBasket=()=>{
      dispach({
          type:'ADD_TO_BASKET',
          item:{
             id:id,
              title:title,
              image:image,
              price:price,
              ratings:ratings,
          }
      })
        
    }
    return (
        <div className='product'>
            <div className='product_info'>
              <p>{title}</p>
              <p>
                  <small>$</small> 
                 <strong>{price}</strong> </p>
              <div className='product_rate'>
                  {Array(ratings).fill().map((_,i)=>(
                     <span ><StarIcon/></span>
                  ))} 
                 
                    
             </div>

            </div>
            <img className='img_product' alt='' src={image} />
            <Button onClick={addtoBasket}>Add to Basket</Button>
        </div>
    )
}

export default Product;
