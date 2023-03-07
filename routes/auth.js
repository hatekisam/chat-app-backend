const {
  login,
  register,
  getAllUsers,
  setProfile,
  logOut,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allusers/:id", getAllUsers);
router.post("/setprofile/:id", setProfile);
router.get("/logout/:id", logOut);

module.exports = router;
