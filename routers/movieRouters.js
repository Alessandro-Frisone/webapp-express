const express = require ("express")
const router = express.Router()
const movieControllers = require ("../controller/movieController")

//-----INDEX-----//
router.get("/", movieControllers.index)

//-----SHOW-----//
router.get("/:id", movieControllers.show)

//-----DESTROY-----//
router.delete("/:id", movieControllers.destroy)

module.exports = router;