const connection = require("../data/db");

//-----INDEX-----//
const index = (req, res) => {
  const sql = `
  SELECT movies.*, ROUND(AVG(reviews.vote)) as avg_vote
  FROM movies
  LEFT JOIN reviews ON movies.id = reviews.movie_id
  GROUP BY movies.id`;



  // const sql = "SELECT * FROM movies";

  connection.execute(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        error: "Query Error",
        message: `Database query failed: ${sql}`,
      });
    }

    const movies = results.map((movie) => {
      movie.image = `${process.env.BE_URL}/movie/${movie.image}`;
      return movie;
    });



    res.json(movies);
  });
};

//-----SHOW-----//
const show = (req, res) => {
  const { id } = req.params;

  // const movieSql = 
    //   SELECT * 
    //   FROM movies
    //   WHERE id = ?;

  const movieSql = `
    SELECT movies.*, ROUND(AVG(reviews.vote)) as avg_vote
    FROM movies
    LEFT JOIN reviews ON movies.id = reviews.movie_id
    WHERE movies.id = ?
    GROUP BY movies.id
  `;

  connection.execute(movieSql, [id], (err, results) => {
    if (err) {
      console.error("Errore nella query del film:", err);
      return res.status(500).json({
        error: "Query Error",
        message: `Database query failed: ${movieSql}`,
      });
    }

    const movie = results[0];

    if (!movie) {
      return res.status(404).json({
        error: "Not found",
        message: "Movie not found",
      });
    }

    movie.image = `${process.env.BE_URL}/movies/${movie.image}`;

    const reviewsSql = `
      SELECT * 
      FROM reviews
      WHERE movie_id = ?
    `;

    connection.execute(reviewsSql, [id], (err, results) => {
      if (err) {
        console.error("Errore nella query delle recensioni:", err);
        return res.status(500).json({
          error: "Query Error",
          message: `Database query failed: ${reviewsSql}`,
        });
      }
      
      movie.reviews = results;
      res.json(movie);
    });
  });
};

  


//-----DESTROY-----//
const destroy = (req, res) => {};

module.exports = { index, show, destroy };
