const mongoose = require("mongoose");

// Schema
const RecipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true,
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('recipes', RecipeSchema);


// async function main() {
//     const mongoDBURI = "mongodb://localhost:27017/RecipeApp";
//     try {
//         await mongoose.connect(mongoDBURI);
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// main();
