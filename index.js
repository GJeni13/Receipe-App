const Express=require("express");
// const RecipesRouter = require("./controllers/recipeController");
const recipeController = require("./controllers/recipeController");
const { createDbConnection } = require("./db");

// CREATE DB CONNECTION
createDbConnection();

// ENVIRONMENT VARIABLES CONFIG
require('dotenv').config();

// STEP 1: Create a API SERVER
const API_SERVER = Express();

// PARSING INCOMING REQUEST BODY AS JSON
API_SERVER.use(Express.json());

// SERVING STATIC FILES
API_SERVER.use(Express.static('public'));


// INJECT ROUTERS
API_SERVER.use("/recipes",recipeController)


// STEP 2: START AND LISTEN INCOMING REQUEST TO THIS SERVER
API_SERVER.listen(process.env.PORT, process.env.HOSTNAME, function () {
    console.log("Server started successfully");
    console.log(`http://${process.env.HOSTNAME}:${process.env.PORT}`)
});