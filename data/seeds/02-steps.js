
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe_id: 1, step_instructions: 'boil water', step_number: 1},
        {id: 2, recipe_id: 1, step_instructions: 'cook pasta', step_number: 2},
        {id: 3, recipe_id: 1, step_instructions: 'warm up sauce', step_number: 3},
      ]);
    });
};
