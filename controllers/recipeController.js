
const RecipeModel = require('../models/recipeModel');

const RecipesRouter = require('express').Router();


// Retrieve all recipes.
RecipesRouter.get("/", async function (request, response) {
  
    try {
       const results = await RecipeModel.find();
       return response.status(200).json({
        message: "Recipes fetched successfully",
        data: results
       })
    } catch(e) {
        return response.status(500).json({
            message: "something went wrong",
            error:error.message
        })
    }
})



//Update a recipe by ID.
RecipesRouter.put("/:recipeId", async function (request, response) {
    try {
        const result = await RecipeModel.findByIdAndUpdate(request.params.recipeId, request.body);
        return response.status(200).json({
            message: "Recipe updated successfully",
            result
        })
    } catch (error) {
        return response.status(400).json({
            message: "Data is missing",
            error: error.message
        });
    }
})
   
//Delete a recipe by ID.
RecipesRouter.delete("/:recipeId",async function (request, response) {
    try {
        const result = await RecipeModel.findByIdAndDelete(request.params.recipeId);
        return response.status(200).json({
            message: "Recipe deleted successfully",
            result
        })
    } catch (error) {
        return response.status(400).json({
            message: "Data is missing",
            error: error.message
        });
    }
})

// Retrieve a single recipe by ID.
RecipesRouter.get("/:recipeId", async function (request, response) {
    try {
        const result = await RecipeModel.findById(request.params.recipeId);
        return response.status(200).json({
            message: "Recipe fetched successfully",
            result
        })
    } catch (error) {
        return response.status(400).json({
            message: "Data is missing",
            error: error.message
        });
    }
})

// Create a Recipe
RecipesRouter.post("/createRecipe", async function (request, response) {
    try {
        const result = await RecipeModel.create(request.body);
        return response.status(200).json({
            message: "Recipe created successfully",
            result
        })
    } catch (error) {
        return response.status(400).json({
            message: "Data is missing",
            error: error.message
        });
    }
})

module.exports = RecipesRouter;