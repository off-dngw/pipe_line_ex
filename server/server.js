const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');

app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.listen(PORT, () =>{
    console.log(`Server On : http://localhost:${PORT}/`)    
})

//console

app.use(express.json());


app.use(
  cors({
    origin: true,
    credentials: true
  })
);