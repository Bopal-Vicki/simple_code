const express = require("express");
const read = require("../utils/read");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.get("/dashboard", async (req, res) => {
  const data = await read();
  res.render("dashboard.ejs", {
    message: data.data,
  });
});

module.exports = router;
