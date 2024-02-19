# Project Name: Konta-Niben

### Searching/Sorting 

Here Searching and sorting are done for finding products using some criteria.

## Features

- You can search using product name, category, and brand.

- You can give a price range from minPrice to maxPrice to filter products within your budget.

- You can sort products in ascending order: sortBy price or sortBy name.

### Admin Dashboard

The Admin Dashboard feature is designed to provide administrators with valuable insights and metrics about products and users within the system. It aggregates data from the backend server and presents it in a user-friendly interface for easy visualization and analysis.

## Features
- Display total number of products and users.

- Visualize product statistics by category, subcategory, and brand.

- Utilizes charts to present data in a clear and intuitive manner.


## Table of Contents

- [Project Name](#KontaNiben)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Configuration](#configuration)
  - [Testing](#testing)
  - [JSdoc](#searching-and-sorting-documentation)
  - [Folder Structure](#folder-structure)
  - [Environment Variables](#environment-variables)
  - [Scripts](#scripts)
  - [API Documentation](#api-documentation)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Description

Longer project description and goals.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (at least version Node.js v18.13.0)
- [npm](https://www.npmjs.com/) (at least version v8: '10.2.154.23-node.21')

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Installation

1. Clone the repository:

   ```bash
   go to any directory and then open your terminal using cmd
   
   git clone git@github.com:SQA-PROJECT-1/Konta-Niben.git

   cd backend
   
   npm install
   
   npm install dotenv
   
   npm run dev

   cd ..
   
   cd client
   
   npm install

   npm install chart.js

   npm install react-chartjs-2 chart.js
   
   npm run dev

   follow the link to get the web application (link like this: http://localhost:5173/)

   then login is required and login with- Email: tazim@gmail.com and Password: 123

   then use this link(http://localhost:5173) to get to the dashboard page 

   then use this link(http://localhost:5173/home) to get to the home page where searching and sorting are done.
   ```
   

### Testing

   ```bash
   cd backend
	
   npm install -g jest

   npm test
   ```
   

### JSdoc

3. Search and sort documentation:

   ```bash
   cd backend
   
   cd controllers
   
   cd productControllers
   
   cd out
   
   open searchAndSortProducts.js.html click the mouse right click and "open with Live server"   
    button.
    ```
   Admin Dashboaed documentation:

   ```bash
   cd backend
   
   cd controllers
   
   cd adminController

   jsdoc adminDashboard.js
   
   cd out
   
   open adminDashboard.js.html click the mouse right click and "open with Live server" button.
    ```
   
