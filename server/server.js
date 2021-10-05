const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;


app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.listen(PORT, () =>{
    console.log(`Server On : http://localhost:${PORT}/`)    
})

//console
const app = express();
app.use(express.json());
const port = 80;

app.use(
  cors({
    origin: true,
    credentials: true
  })
);