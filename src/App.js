import Header from './Header';
import React, {useEffect} from  'react';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import {auth} from './Firebase';
//import { useState } from 'react';
import { useStateValue } from './Stateprovider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';
import Footer from './Footer';

const promise=loadStripe('pk_test_51IjqLtKoPLKPbqh0L5X7LkOxU7nHn4GOEVj3YtMx9Em8nWRdVNHQX2VkkKYTcZ9jAg97Wp9c0XYvCEzZ9kfiKx4r00zp0eq9tl');

function App() {
 const [{},dispach]= useStateValue();
  useEffect(() => {
  auth.onAuthStateChanged(authUser=>{
    console.log(`the user ${authUser}`);
    if (authUser){
      dispach({
        type:'SET_USER',
        user:authUser
      })
    }
    else{
      dispach({
        type:'SET_USER',
        user: null
  
      })
 
    }
  })
  }, [])
  return (
    
      <Router>
        <div className="App">
        
       <Switch>
       <Route path='/payment'>
       <Header/>
          
           <Elements stripe={promise}>
           <Payment/>
           </Elements>
           </Route>
           <Route path='/orders'>
           <Header/>
         <Orders/>
           
           </Route>
       <Route path='/login'>
         <Login/>
        
           </Route>
           <Route path='/checkout'>
           <Header/>
         <Checkout/>
         <Footer/>
         </Route>
         <Route path='/'>
         <Header/>
          <Home/>
          <Footer/>
         </Route>
       </Switch>
       </div>
      </Router>
  
    
   
  );
}

export default App;
