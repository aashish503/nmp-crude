const express = require('express');
const app = express();
const port = process.env.PORT || 5100

const cors = require('cors');
app.use(express.json());


const route = require('./router/rout.router');
require('./config/connection');
app.use('/api', cors(), route);


app.listen(port, () => {
    console.log(`listening to port ${port}`)
});