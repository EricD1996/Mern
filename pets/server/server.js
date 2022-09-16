const port = 8000;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
require('./config/mongoose.config');
const {petRouter} = require('./routes/pet.routes');


app.use('/api/pet', petRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})