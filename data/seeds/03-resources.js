exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "MDN", resource_description: "mozilla developer network" },
        { name: "cereal bowl" },
        { name: "Postman", resource_description: "use to check routes" }
      ]);
    });
};
