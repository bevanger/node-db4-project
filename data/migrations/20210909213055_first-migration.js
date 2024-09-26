
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        table.increments('id')
        table.string('recipe_name', 30).notNullable().unique()
    })
    .createTable('steps', table => {
        table.increments('id')
        table.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes')
        table.string('step_instructions', 128).notNullable()
        table.integer('step_number').notNullable()
    })
    .createTable('ingredients', table => {
        table.increments('id')
        table.string('ingredients_name', 30).notNullable().unique()
    })
    .createTable('step_ingredients', table => {
        table.increments('id')
        table.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients')
        table.integer('step_id').unsigned().notNullable().references('id').inTable('steps')
        table.string('quantity', 128).notNullable()
    })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('step_ingredients')
};
