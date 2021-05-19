import React from 'react';
import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import TwitterIcon from '@material-ui/icons/Twitter';


function Footer() {
    return (
        <div >
           <footer className='footer'>
           <img className='logo' src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' alt=''/>
            <div className='txt'><h2>About Us</h2>
           <p>We are providing best quality things in reasonable price.We also ensure you that on delivery you can check the quality then pay the payment of our product</p>
</div>
<div className='txt'>
            <h2>Contact Us</h2>
            <p>For any query can conatct us on social media or via email & number</p>
            <p><PhoneIcon/>: +92532 736433 </p>
            <p><EmailIcon/>: test.org.pk</p>
         
            </div>
            <div className='icons'>
                <FacebookIcon className='icon'/>
                <InstagramIcon className='icon'/>
                <LinkedInIcon className='icon'/>
                <TwitterIcon className='icon'/>


            </div>
           </footer>
        </div>
    )
}

export default Footer
