const express = require("express");
const {
  create,
  getAll,
  getOne,
  update,
  deleteUser,
} = require("../controller/userController.js");

const router = express.Router();

router.post("/create", create);
router.get("/getAll", getAll);
router.get("/getOne/:id", getOne);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteUser);
module.exports = router;
