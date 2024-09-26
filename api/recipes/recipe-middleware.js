const Recipes = require('./recipe-model');

const checkRecipeId = (req, res, next) => {
    const { recipe_id } = req.params
    Recipes.findById(recipe_id)
        .then(recipe => {
            if(recipe){
                req.recipe = recipe
                next()
            } else {
                next({ message: `recipe with recipe_id ${recipe_id} not found`, status: 404})
            }
        })
        .catch(next)
}

module.exports = {
    checkRecipeId
}