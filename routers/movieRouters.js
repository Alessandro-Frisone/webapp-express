const express = require ("express")
const router = express.Router()
const movieControllers = require ("../controller/movieController")

//-----INDEX-----//
router.get("/", movieControllers.index)

module.exports = router;