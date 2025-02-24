const express = require ("express")
const router = express.Router()
const movieControllers = require ("../controller/movieController")

//-----INDEX-----//
router.get("/", movieControllers.index)

//-----SHOW-----//
router.get("/", movieControllers.show)

//-----DESTROY-----//
router.delete("/", movieControllers.destroy)

module.exports = router;