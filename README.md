
# Project Name: Konta-Niben

## Table of Contents

- [Project Name](#project-name-konta-niben)
  - [Used Technology](#used-technology)
  - [Admin Dashboard](#admin-dashboard)
    - [Features](#features)
    - [Screenshots](#screenshots)
  - [Product Recommendation](#product-recommendation)
    - [Features](#features-1)
    - [Screenshots](#screenshots-1)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
      - [Instructions for Backend](#instructions-for-backend)
      - [Instructions for Frontend](#instructions-for-frontend)
    - [Testing](#testing)
      - [Unit Testing](#unit-testing)
      - [Continuous Integration Testing](#continuous-integration-testing)
    - [JSdoc](#jsdoc)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Used Technology  

The following technologies were used in this project:

- Node.js
- Express.js
- MongoDB
- React.js
- Chart.js
- Jest
- JSDoc
- GitHub Actions

## Admin Dashboard

The Admin Dashboard feature is designed to provide administrators with valuable insights and metrics about products and users within the system. It aggregates data from the backend server and presents it in a user-friendly interface for easy visualization and analysis.

### Features
- Display total number of products and users.

- Visualize product statistics by category, subcategory, and brand.

- Utilizes charts to present data in a clear and intuitive manner.

### Screenshots

![alt text](/resources/image-1.png)

## Product Recommendation

The Product Recommendation feature allows users to receive recommendations for products based on specified criteria such as product category, targeted age group, skin type, and concerns. It fetches products from the database that match the provided criteria and returns them to the user.

### Features

- Retrieves product recommendations based on specified criteria.

- Fetches products from the database that match the provided criteria such as product category, targeted age group, skin type, and concerns.

- Handles errors gracefully and returns appropriate error messages.

### Screenshots

![alt text](/resources/image-2.png)

![alt text](/resources/image-3.png)


## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (at least version Node.js v18.13.0)
- [npm](https://www.npmjs.com/) (at least version v8: '10.2.154.23-node.21')


## Getting Started

These instructions will help you set up and run the project on your local machine.

### Installation

   Clone the repository:

   ```bash
   go to any directory and then open your terminal using cmd
   
   git clone git@github.com:SQA-PROJECT-1/Konta-Niben.git

   ```

  **Insturctions for Backend** 

  ```bash

   cd backend
   
   npm install
   
   npm install dotenv

   npm install cors    

   npm install nodemon

   npm i express

   npm install mongoose
   
   npm run dev

   cd ..

   ```

  **Insturctions for Backend** 

  ```bash
   
   cd client

   npm install

   npm install react-icons   

   npm install chart.js

   npm install react-chartjs-2 chart.js
   
   npm run dev

   follow the link to get the web application (link like this: http://localhost:5173/)

   then login is required and login with- `Email: tazim@gmail.com` and `Password: 123`

   then use this link(http://localhost:5173) to get the admin dashboard page 

   then use this link(http://localhost:5173/home) to get to the home page where you will find Recommendation option in nabvar. Clicking the option will send u another page where you will find a form for getting recommended products.

   ```
   
### Testing
 
 **Unit Testing**

   ```bash
   cd backend
	
   npm install -g jest

   npm test
   ```

  **Continuous Integration Testing**

  This project includes continuous integration tests using GitHub Actions. The CI tests are automatically triggered on each push or making pull requests to this branch. You can view the workflow file [here](.github/workflows/ci.yml).


### JSdoc

  **Admin Dashboaed Documentation:**

   ```bash

   cd backend
   
   cd controllers
   
   cd adminController

   jsdoc adminDashboard.js
   
   cd out
   
   open adminDashboard.js.html click the mouse right click and "open with Live server" button.
    
  ```

  **Product Recommendation Documentation:**

   ```bash

   cd backend
   
   cd controllers
   
   cd productControllers

   jsdoc getProductRecommendation.js
   
   cd out
   
   open getProductRecommendation.js.html click the mouse right click and "open with Live server" button.
  
  ```

## License  

This project is licensed under the MIT License.

## Ackowledgements

Special Thanks 💚 to our repected supervisor `Dr. Md. Musfique Anwar` and all the team members.

![alt text](/resources/image.png)