const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

// Middleware to parse JSON bodies
app.use(express.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
    console.log('Received webhook:', req.body);

    // Respond with 200 OK to acknowledge receipt of the webhook
    res.status(200).send('Webhook received');
});

// Start the server
app.listen(port, () => {
    console.log(`Webhook server listening at http://localhost:${port}`);
});
