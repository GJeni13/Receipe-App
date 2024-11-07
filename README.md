# Recipes App

A CRUD application for managing recipes built with Node.js, Express.js, and MongoDB using Mongoose.

## Features
- Create, Read, Update, and Delete recipes.
- Fully documented API using Postman.
- Error handling and input validation.

## Tech Stack
- Node.js
- Express.js
- MongoDB with Mongoose
- Postman for API documentation

## Setup
1. Clone the repository.
2. Install dependencies: `npm install`
3. Start MongoDB server: `mongod`
4. Run the app: `npm run dev`

## API Endpoints
- `POST /api/recipes` - Create a new recipe
- `GET /api/recipes` - Retrieve all recipes
- `GET /api/recipes/:id` - Retrieve a recipe by ID
- `PUT /api/recipes/:id` - Update a recipe by ID
- `DELETE /api/recipes/:id` - Delete a recipe by ID
