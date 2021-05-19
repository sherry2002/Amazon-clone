
import React, {useState} from 'react';
import './login.css';
import { Link, useHistory } from 'react-router-dom';
import {auth} from './Firebase';

function Login() {
    const history=useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn=(e)=>{
     e.preventDefault();
   auth.signInWithEmailAndPassword(email,password)
   .then(auth=>{
    history.push('/')
   })
   .catch(error=> alert(error.message))

    }

    const register=(e)=>{
        e.preventDefault();
      auth.createUserWithEmailAndPassword(email,password)
     .then((auth)=>{
  
    if (auth){
        history.push('/')
    }

     })
     .catch(error=> alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
            <img className='logo' src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' alt=''/>
            </Link>
           <div className='login_container'>
               <h1>Login </h1>
               <form>
               <h5>Email</h5>
               <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
               <h5>Password </h5>
               <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
               <button type='submit' onClick={signIn}>Sign In</button>
               </form>
               <p>By signing in you agree to Amazon's Conditions
                   of Use & Sale. Please see our Notice, our Cookies 
                   Notice and our international-Based ads
               </p>
               <button className='register_button' onClick={register}>Create your account </button>
           </div>
        </div>
    )
}

export default Login;
