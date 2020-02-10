exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("description");
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("resource_description");
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("task_description").notNullable();
      tbl.string("notes");
      tbl
        .boolean("task_completed")
        .notNullable()
        .defaultTo(false);
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("projects.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("projects_resources", tbl => {
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("projects.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("resource_id")
        .notNullable()
        .unsigned()
        .references("resources.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects_resources");
};
