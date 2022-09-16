const port = 8000;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
require('./config/mongoose.config');
const {authorRouter} = require('./routes/author.routes');


app.use('/api/author', authorRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})