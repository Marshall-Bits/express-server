const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/test", (req, res, next) => {
  res.json("Test route");
});

router.get("/test2", (req, res, next) => {
  res.json("Test route 2");
});

module.exports = router;
