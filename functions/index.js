const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const { response } = require("express");

const stripe=require("stripe")('sk_test_51IjqLtKoPLKPbqh0XwelpPFgLi3BK8hEMPJ7lgo6pVgK2ji2gpuZiYaBGHSq1HAyhkj5l8zSOCV1XMOcFJRjwGiH00URtmibP9');



const app=express();
// middleware
app.use(cors({origin:true}));

app.use(express.json());

//Api Call

app.get('/',(request,response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total= request.query.total;

    console.log('Payment Request Recieved',total/100);

    const paymentIntent= await stripe.paymentIntents.create({
          amount:total ,
          currency:'usd',
    });
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    });
}
    
);

 
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-bf039/us-central1/api
// http://localhost:5001/clone-bf039/us-central1/api
