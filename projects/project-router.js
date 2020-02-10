const express = require("express");
const Data = require("./project-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Data.getProjects()
    .then(proj => {
      res.status(200).json(proj);
    })
    .catch(err => {
      res.status(500).json({ Error: "failed to retrieve data", err });
    });
});

router.get("/:id", (req, res) => {
  Data.findById(req.params.id)
    .then(proj => {
      if (proj) {
        res.status(200).json(proj);
      } else {
        res.status(404).json({ message: "ID does not exist" });
      }
    })
    .catch(err => {
      res.status(500).json({ Error: "failed to retrieve data", err });
    });
});

router.post("/", (req, res) => {
  const schemeData = req.body;
  if (!schemeData.name) {
    res.status(400).json({ message: "please add a name for your project" });
  }

  Data.addProject(schemeData)
    .then(proj => {
      res.status(200).json(proj);
    })
    .catch(err => {
      res.status(500).json({ Error: "failed to retrieve data", err });
    });
});

router.get("/:id/tasks", (req, res) => {
  Data.getTasks(req.params.id)
    .then(task => {
      if (task.length) {
        res.status(200).json(task);
      } else {
        res.status(404).json({ message: "that ID does not exist" });
      }
    })
    .catch(err => {
      res.status(500).json({ Error: "failed to retrieve data", err });
    });
});

router.post("/:id/tasks", (req, res) => {
  const data = {
    task_description: req.body.task_description,
    notes: req.body.notes,
    project_id: req.params.id
  };
  const { id } = req.params;

  Data.findById(id)
    .then(scheme => {
      if (scheme) {
        Data.addTask(data, id).then(step => {
          res.status(201).json(step);
        });
      } else {
        res.status(404).json({ message: "Could not find with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});

module.exports = router;
