const express = require("express");
const read = require("../utils/read");
const write = require("../utils/write");
const router = express.Router();

router.get("/dashboard/:dataToChange", async (req, res) => {
  const dataToChange = req.params.dataToChange;
  const data = await read();
  data.data = dataToChange;
  await write(JSON.stringify(data));
  res.redirect("/dashboard");
});

module.exports = router;
