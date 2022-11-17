const express = require('express');
const data = require('./data.json');
const cors = require('cors');
const app = express();
const port = 3001;
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, 
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.get('/', (req, res) => res.send(data));
app.listen(process.env.PORT || 3001, () => console.log(`Example app listening on port ${port}!`));
