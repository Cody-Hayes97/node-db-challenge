const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  getResources,
  getTasks,
  addProject,
  addResource,
  addTask,
  findById
};

function getProjects() {
  return db("projects");
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function addProject(data) {
  return db("projects").insert(data);
}

function getResources() {
  return db("resources");
}

function addResource(data) {
  return db("resources").insert(data);
}

function getTasks(id) {
  return db("tasks")
    .join("projects", "projects.id", "tasks.project_id")
    .select(
      "projects.name",
      "projects.description",
      "tasks.task_description",
      "tasks.notes",
      "tasks.project_id",
      "tasks.id"
    )
    .where({ project_id: id });
}

function addTask(task, project_id) {
  return db("tasks").insert(task, project_id);
}
