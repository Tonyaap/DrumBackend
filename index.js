const express = require("express");
const { PORT } = require("./config/constants");
const userRouter = require("./routers/users");
const compositionRouter = require("./routers/compositions");

const app = express();

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use("/users", userRouter);
app.use("/compositions", compositionRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
