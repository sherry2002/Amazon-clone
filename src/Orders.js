import React ,{useState,useEffect}from 'react';
import  db  from './Firebase';
import firebase from 'firebase';
import {useStateValue} from './Stateprovider';
import './orders.css'
import Order from './Order';

function Orders() {
    const [orders,setOrder]=useState([]);
    const [{basket,user},dispach]=useStateValue();
   
    useEffect(() => {
        if (user){
        db.collection('users').doc(user?.uid)
        .collection('orders').orderBy('created','desc')
        .onSnapshot(snapshot=>(
            setOrder(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        ))
        }
        else{
            setOrder([])
        }

        
    }, [])


    return (<>
        <h2 className='ordertxt'>Your Orders</h2>
        <div className='order'>
        
            <div className='orders'>
             {orders?.map(order=>(
                 <Order order={order}/>
             ))}
            </div>
            
        </div>
        </>
    )
}

export default Orders;
