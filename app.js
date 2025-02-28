const express = require("express");
const app = express();
const cors = require("cors");
const movieRouter = require ("./routers/movieRouters")
const errorsHandler = require("./middleware/errorsHandler");
const notFound = require ("./middleware/notFound")
const { PORT, FE_URL } = process.env;

// middleware CORS (che permette la comunicazione con il FE)
app.use(
  cors({
    origin: FE_URL,
  })
);

// middleware per i file statici
app.use(express.static("public"));

// middleware per il parsing del req.body
app.use(express.json());


// Routes (le rotte della mia applicazione)
app.use("/movie", movieRouter)

// Middlewares - Per la gestione degli errori (404, 500)
app.use(errorsHandler);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
