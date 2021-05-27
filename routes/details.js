const express = require("express");
const roflcopter2110Details = require("../crawllers/roflcopter2110/details");
const o337xDetails = require("../crawllers/1337x/details");
const limetorrentDetails = require("../crawllers/limetorrent/details");

const router = express.Router();

router.get("/roflcopter2110", async (req, res) => {
  let query = req.query.query;

  if (query === "" || !query) {
    res.send({ error: true, errorMessage: "Search term cannot be empty" });
  } else {
    const data = await roflcopter2110Details(query);
    res.send(data);
  }
});

router.get("/1337x", async (req, res) => {
  let query = req.query.query;

  if (query === "" || !query) {
    res.send({ error: true, errorMessage: "Search term cannot be empty" });
  } else {
    const data = await o337xDetails(query);
    res.send(data);
  }
});

router.get("/limetorrent", async (req, res) => {
  let query = req.query.query;

  if (query === "" || !query) {
    res.send({ error: true, errorMessage: "Search term cannot be empty" });
  } else {
    const data = await limetorrentDetails(query);
    res.send(data);
  }
});

module.exports = router;
