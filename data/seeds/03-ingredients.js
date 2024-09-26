
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredients_name: 'water'},
        {id: 2, ingredients_name: 'pasta'},
        {id: 3, ingredients_name: 'tomato sauce'}
      ]);
    });
};
