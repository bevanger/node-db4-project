const express = require('express');
const { checkRecipeId } = require('./recipe-middleware');
const Recipes = require('./recipe-model');

const router = express.Router()

router.get('/:recipe_id', checkRecipeId, (req, res, next) => {
    const { recipe_id } = req.params
    Recipes.findById(recipe_id)
        .then(recipe => {
            res.json(recipe)
        })
        .catch(next)
})

module.exports = router