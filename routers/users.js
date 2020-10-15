const { Router } = require("express");
const users = require("../models").users;
const Compositions = require("../models/").compositions;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const user = await users.findAll({
      include: [Compositions],
    });

    res.json(user);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
