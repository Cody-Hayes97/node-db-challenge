exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_description: "set up node server",
          notes: "use npm or yarn to run the server",
          project_id: 1
        },
        {
          task_description: "set up CRA",
          notes: "use npm or yarn to initialize create react app",
          project_id: 2,
          task_completed: true
        },
        {
          task_description: "get a bowl of cereal",
          project_id: 3
        }
      ]);
    });
};
