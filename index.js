const express = require("express");
const app = express();
const ejs = require("ejs");
const viewRoute = require("./routes/viewRoutes");
const modifyRoute = require("./routes/modifyRoute");

app.use(express.json());
app.use(express.static(`${process.cwd()}`));
app.set("view engine", "ejs");
app.use(viewRoute);
app.use(modifyRoute);

app.listen(8000, () => {
  console.log("server is listening");
});
