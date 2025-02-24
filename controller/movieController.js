const connection = require("../data/db")

//-----INDEX-----//
const index =(req, res) => {
    const sql = "SELECT * FROM movies";

    connection.execute(sql, (err, results) => {
        if (err) {
          return res.status(500).json({
            error: "Query Error",
            message: `Database query failed: ${sql}`,
          });
        }
    
        res.json(results);
      });
    };


//-----SHOW-----//
const show =(req, res) => {
    
}



//-----DESTROY-----//
const destroy =(req, res) => {
    
}



module.exports = { index, show, destroy };