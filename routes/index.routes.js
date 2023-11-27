const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here in MS_Projects");
});

router.get("/test", (req, res, next) => {
  res.json("Test from MS_Projects");
});




module.exports = router;
