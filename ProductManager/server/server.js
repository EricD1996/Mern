const port = 8000;
const express = require('express');
const cors = require('cors');
const {productmanagerRouter} = require('./routes/productmanager.routes');
require('./config/mongoose.config');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/productmanager', productmanagerRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})