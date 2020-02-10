exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "node homework",
          description: "do my node assignments for the day"
        },
        {
          name: "react homework",
          description: "do my react assignments for the day",
          completed: true
        },
        {
          name: "node sprint challenge"
        }
      ]);
    });
};
