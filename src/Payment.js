import React,{useState,useEffect} from 'react';
import './payment.css';
import {useStateValue} from './Stateprovider';
import FlipMove from 'react-flip-move';
import CheckoutProduct from './Checkoutproduct';
import {getBasketTotal} from './Reducer';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import axios from './Axios';
import db from './Firebase';
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {
    const [{basket,user},dispach]=useStateValue();
    const history=useHistory();
    const [error,setError]=useState(null);
    const [disabled,setdisable]=useState(true);
    const [clientSecret,setClientSecret]=useState(true);
    const [processing,setProcessing]=useState('');
    const [succeeded,setSucceeded]=useState(false);

    const stripe=useStripe();
    const elements= useElements();

    useEffect(() => {
        const getClient= async ()=>{
            const response = await axios({
                method:'post',
                url:`/payments/create?total=${getBasketTotal(basket)*100}`
            })
            setClientSecret(response.data.clientSecret)
        }
      getClient();
    }, [basket])
    console.log('client',clientSecret);

    const handlesubmit=async (e)=>{
    e.preventDefault();
       setProcessing(true);

       //const payload = await stripe 
       const payload =await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
          card: elements.getElement(CardElement)
      }
       }).then(({paymentIntent})=>{

         db.collection('users').doc(user?.uid)
         .collection('orders').doc(paymentIntent.id)
         .set({
             basket:basket,
             amount:paymentIntent.amount,
             created:paymentIntent.created,
         })

        setSucceeded(true);
        setError(null);
        setProcessing(false)
         
        dispach({
            type:'EMPTY_BASKET'
        })

        history.replace('/orders')
       })
      
    
    }

    const handlechange=(event)=>{
      setdisable(event.empty);
      setError(event.error? event.error.message:'');
    }

    return (
        <div className='payment'>
            <div className="payment_con">
            <h1>Checkout ({
                       <Link to='/checkout'>{basket.length} items</Link>
                       })
                       
                   </h1>
            
           <div className='payment_sec'>
               <div className='payment_title'>
                   <h3>Your info</h3>
               </div>
               <div className='payment_address'>
                   <p>{user?.email}</p>
                   <p>abc street karachi</p>
                   <p>karachi,pak</p>
               </div>
           </div>
           <div className='payment_sec'>
           <div className='payment_title'>
                   <h3>Review Item & delivery</h3>
               </div>
               <div className='payment_items'>
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
           <div className='payment_sec'>
           <div className='payment_title'>
                   <h3>Payment Mehtod</h3>
               </div>
               <div className='payment_detail'>
                  <form onSubmit={handlesubmit}>
                      <CardElement onChange={handlechange} className='card'/>
                      <div className='print_payment'>
                            <CurrencyFormat
                    renderText={(value)=>(
                    <>
                    <h3> Order Totals: {value}
                    </h3>
                
                   
                    </>
                )} 
                decimalState={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded}><span>{processing ? <p>processing</p> :'Buy Now'}</span></button>
                      </div>
                      {error && <div>Error</div>}
                  </form>
               </div>

           </div>
           </div>
        </div>
    )
}

export default Payment;
