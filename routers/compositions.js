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
    // const loggedinId = parseInt(req.body.userId);
    const { id } = req.params;

    // const foundUser = await User.findByPk(loggedinId);

    const { compositionName, composition } = req.body;

    console.log("composition.kick!", composition.kick);

    if (!id) {
      res.status(404).send("User not found");
    } else {
      const newComposition = await compositions.create({
        userId: id,
        compositionName,
        ...composition,
      });

      res.json({ newComposition });
    }
  } catch (e) {
    console.log("error", e);
    next(e);
  }
});

// router.delete("/:id", auth, async (req, res, next) => {
//   try {
//     const reservationId = req.params.id;
//     const reservationToDelete = await reservations.findByPk(reservationId);

//     await reservationToDelete.destroy();
//     res.send("reservation Deleted");
//   } catch (e) {
//     next(e);
//   }
// });

// router.post("/:id", auth, async (req, res) => {
//   const newComposition = await compositions.findById(req.params.id);

//   if (newComposition === null) {
//     return res.status(404).send({ message: "Doesn't Exist" });
//   }

//   const { userId, compositionName } = req.body;

//   if (!compositionName) {
//     return res.status(400).send({ message: "Composition must have a name" });
//   }

//   if (!userId) {
//     return res
//       .status(400)
//       .send({ message: "must be logged in to save composition" });
//   }
module.exports = router;
