const { Router } = require("express");
const compositions = require("../models/").compositions;
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

// router.post("/:id/reservation", auth, async (req, res) => {
//   const reserved = await reservations.findByPk(req.params.id);

//   if (reserved === null) {
//     return res.status(404).send({ message: "Doesn't Exist" });
//   }

//   const { tableId, userId, date } = req.body;

//   if (!date) {
//     return res.status(400).send({ message: "must have a date" });
//   }

//   const reserveTable = await reservations.create({
//     userId,
//     date,
//     tableId: req.params.id,
//   });
//   return res.status(201).send({ message: "table reserverd!", reserveTable });
// });

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

module.exports = router;
