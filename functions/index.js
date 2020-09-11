const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HQ8G6AKKub6FeRVRS8gv8ZZVP5kivs2ULYVV75dAgzPCToQ9F6nUHFj6okAS7iibho8VIv8fUFyRmPtnKsoYhx600VFXoMhNY')

// API
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routers
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment request received >>> for the amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // Subunits of the currency
        currency: "inr"
    });

    //OK - Create
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)