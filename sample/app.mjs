import express from 'express';

import connectToDatabase from './helpers.mjs';

const app = express();

app.get('/', (req, resp) => {
    resp.send('<h1>Hi there! How are you?</h1>');
})

await connectToDatabase(); 

app.listen(3000)
