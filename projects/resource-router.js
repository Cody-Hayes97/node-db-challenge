const express = require("express");
const Data = require("./project-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Data.getResources()
    .then(proj => {
      res.status(200).json(proj);
    })
    .catch(err => {
      res.status(500).json({ Error: "failed to retrieve data", err });
    });
});

router.post("/", (req, res) => {
  const schemeData = req.body;
  if (!schemeData.name) {
    res.status(400).json({ message: "please add a name for your resource" });
  }

  Data.addResource(schemeData)
    .then(r => {
      res.status(200).json(r);
    })
    .catch(err => {
      res.status(500).json({ Error: "failed to retrieve data", err });
    });
});

module.exports = router;
