const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const stripe = require('stripe');
const compression = require('compression');

if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripeObj = stripe(process.env.STRIPE_SECRET_KEY);


const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
// Convert request.body value to json.
app.use(bodyParser.json());
// format url.
app.use(bodyParser.urlencoded({ extended: true }));
// enable cross origin requests.
app.use(cors());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));

    });
} else {
    // do nothing.
}

app.listen(port, error => {
    if(error) throw error;
    console.log(`Server running on port ${port}`);
});

app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };
    stripeObj.charges.create(body, (stripeErr, stripeRes) => {
        if(stripeErr) {
            res.status(500).send({ error: stripeErr });
        } else {
            res.status(200).send({ success: stripeRes });
        }
    });
});