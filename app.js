const express = require("express");
const app = express();
const cors = require("cors");
const { PORT, FE_URL } = process.env;
const errorsHandler = require("./middleware/errorsHandler");
const notFound = require ("./middleware/notFound")

// middleware per i file statici
app.use(express.static("public"));

// middleware per il parsing del req.body
app.use(express.json());

// middleware CORS (che permette la comunicazione con il FE)
app.use(
  cors({
    origin: FE_URL,
  })
);

// Middlewares - Per la gestione degli errori (404, 500)
app.use(errorsHandler);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
