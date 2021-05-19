import React from 'react';
import './order.css';
import moment from "moment";
import Checkoutproduct from './Checkoutproduct';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './Stateprovider';

function Order({order}) {
   // const [{basket},dispach]= useStateValue();
    return (
        <div  className='order1'>
           <div className='prod_id'>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
        
            <p>
                <small>{order.id}</small>
            </p>
            </div>
            <div className='orderstyle'>
            {order.data.basket?.map(item=>(
                <Checkoutproduct
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price} 
                 ratings={item.ratings} 
                />
            ))}
              <CurrencyFormat
            renderText={(value)=>(
            <>
            <h3 className='text'> Total Order: <strong>{value}</strong>
            </h3>
           
           
            </>
          )} 
          decimalState={2}
          value={order.data.amount/100}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          />
        </div>
        </div>
    )
}

export default Order;
