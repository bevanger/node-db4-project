
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {id: 1, ingredient_id: 1, step_id: 1, quantity: '3 cups'},
        {id: 2, ingredient_id: 2, step_id: 2, quantity: '1 box'},
        {id: 3, ingredient_id: 3, step_id: 3, quantity: '1 bottle'},
      ]);
    });
};
