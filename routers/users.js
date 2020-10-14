const { Router } = require("express");
const users = require("../models").users;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const user = await users.findAll();

    res.json(user);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
