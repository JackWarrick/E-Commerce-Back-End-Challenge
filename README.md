
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Title: E-Commerce Back-End Challenge 

## Table of Contents

* [Description](#description)

* [Installation](#installation)

* [Contributing](#contributing)

* [Media](#media)

* [License](#license)

* [Questions](#questions)

## Description

This program is meant to be a back end for an e-commerce company selling items online. When a user adds the database name, their MySQL username and MySQL password to the .env file, the user can connect to the database using Sequelize. The user can then use the the schema to create the database and use the seed command to seed the database with data. When the user runs npm start, the server is started and the Sequelize models are synced in the MySQL database. When the user opens GET requests to the categories, prouducts or tags routes, the data is displayed for each. When a user runs POST, PUT, or DELETE requests with the correct data, th data is successfully modified.

## Installation

Log in to mysql and run source schema.sql while in the correct directory. Then exit mysql and run npm run seed to put the seed data in the table. Then start the server by running npm start. Then, go to insomnia and try all of the routes of categories, products, and tags (http://localhost:3001/api/categories for example), and try the GET, POST, UPDATE and DELETE.

## Contributing

Jack Warrick

## Media

**Demonstration Video:**

[Link to Demonstration Video](https://drive.google.com/file/d/1dW5-ryIMWzhcJEvvTHZw7AOmf43cIrrk/view)

## License

This application is covered under the MIT License.

## Questions

For more information, please reference my GitHub profile [here](https://github.com/JackWarrick), or reach out to my email: j.d.warrick@comcast.net.
