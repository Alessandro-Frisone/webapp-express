const express = require('express')
const app = express()
const cors = require("cors")
const { PORT, FE_URL} = process.env


// middleware per i file statici
app.use(express.static("public"));

// middleware CORS (che permette la comunicazione con il FE)
app.use(
    cors({
      origin: FE_URL,
    })
  );

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})