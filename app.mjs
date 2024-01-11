import express from 'express';

import connectToDatabase from './helpers.mjs';

const app = express();

app.get('/', (req, resp) => {
    resp.send('<h2>Hi there!</h2>');
})

await connectToDatabase(); 

app.listen(3000)
