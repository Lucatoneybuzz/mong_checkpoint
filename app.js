const express = require('express');
const databaseController = require('./controllers/databaseController');
require('dotenv').config();
const PORT = process.env.PORT || 3000
const connect = require('./config/db')

connect()


const app = express();

// Example usage of the databaseController functions
databaseController.createAndSavePerson({ name: 'Alice', age: 25, favoriteFoods: ['Pizza', 'Pasta'] })
    .then((data) => {
        console.log('Person saved:', data);
    })
    .catch((err) => {
        console.error(err);
    });
    
    

// Add more usage examples here

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});
