const express = require("express");
const { PORT } = require("./config/constants");
const userRouter = require("./routers/users");
const compositionRouter = require("./routers/compositions");
const authRouter = require("./routers/auth");

const app = express();

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

app.use("/users", userRouter);
app.use("/compositions", compositionRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
