const express = require ("express")
const multer = require("multer");
const router = express.Router()
const movieControllers = require ("../controller/movieController")

const storage = multer.diskStorage({
    destination: "public/movie",
    filename: function (req, file, cb) {
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    },
  });

const upload = multer({ storage: storage });

//-----INDEX-----//
router.get("/", movieControllers.index)

//-----SHOW-----//
router.get("/:id", movieControllers.show)

//-----STORE-REVIEW-----//
router.post("/:id/reviews", movieControllers.storeReview);

//-----STORE-----//
router.post("/", upload.single("image"), movieControllers.store);

//-----DESTROY-----//
router.delete("/:id", movieControllers.destroy)

module.exports = router;