const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));

app.get('/oauth2callback', (req, res) => {
    res.send('Check Console👇👇');
})
app.use('/api', require('./routes/api/product'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});