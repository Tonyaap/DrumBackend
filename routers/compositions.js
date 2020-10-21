const { Router } = require("express");
const compositions = require("../models/").compositions;
const User = require("../models/").users;
const router = new Router();
// const auth = require("../auth/middleware");

router.get("/", async (req, res, next) => {
  try {
    const composition = await compositions.findAll();
    res.json(composition);
  } catch (e) {
    next(e);
  }
});

router.post("/:id", async (req, res, next) => {
  console.log("HELLO ARE YOU THERE?");
  try {
    const { id } = req.params;

    const { compositionName, composition } = req.body;

    if (compositionName === "") {
      console.log("test");
      return res.status(404).send({
        message: "Please give your beat a name",
      });
    } else {
      const newComposition = await compositions.create({
        userId: id,
        compositionName,
        ...composition,
      });

      res.json({ newComposition });
    }
  } catch (e) {
    if (e.name === "SequelizeUniqueConstraintError") {
      return res.status(404).send({ message: "This name allready exists" });
    }
    console.log("error", e);
    next(e);
  }
});

module.exports = router;
