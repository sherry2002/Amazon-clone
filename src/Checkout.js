import React from 'react';
import './checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './Checkoutproduct';
import FlipMove from 'react-flip-move';
import { useStateValue } from './Stateprovider';

function Checkout() {
  const [{basket,user},dispach]= useStateValue();
    return (<div className='width'>
        <div className='check'>
          <div className='checkout'>
            
              <img className='ad' src='https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/student/StudentMemberPage/PSPage_Dsktp_Header-NonMember_1x_1500x390.jpg' alt=''/>
            
          
          <div className='check_title'>
             <h3>Hello, {user?user.email:'Guest'}</h3>

              
          </div>
          </div>
          <div className='check_right'>
            <Subtotal/>
          </div>
          </div>
      <div className='itms'>
      {basket.map(item=>(
          <FlipMove>
         <CheckoutProduct
         id={item.id}
         title={item.title}
         image={item.image}
         price={item.price} 
         ratings={item.ratings} 
        />
   </FlipMove>
       ))}

        
        </div>  
      

         
          </div>
        
    )
}

export default Checkout;
