const router = require("express").Router();
const {
  getMovie,
  setMovie,
  getRandom,
  getMovieID,
  updateMovie,
  deleteMovie,
} = require("../controllers/moviesController");
const verify = require("../middleware/authMiddleware");

// ! Movies

router.route("/",).post(verify, setMovie).get(verify, getMovie);
router.get("/random", verify, getRandom);
router.get("/find/:id", verify, getMovieID);
router.route("/:id").put(verify, updateMovie).delete(verify, deleteMovie);

module.exports = router;
