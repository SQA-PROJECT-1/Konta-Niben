# Project Name: Konta-Niben

## Table of Contents

- [Project Name](#project-name-konta-niben)
  - [Used Technology](#used-technology)
  - [Searching, Sorting and Filtering](#search-sort)
    - [Features](#features)
    - [Screenshots](#screenshots)
  - [Payment Method](#payment-method)
    - [Features](#features)
    - [Screenshots](#screenshots)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
      - [Instructions for Backend](#instructions-for-backend)
      - [Instructions for Frontend](#instructions-for-frontend)
    - [Testing](#testing)
      -[Unit Testing](#unit-testing)
      -[Continuous Integration Testing](#continuous-integration-testing)
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
- SSLCommerz
- GitHub Actions

## Searching, Sorting and Filtering

Here Searching and sorting are done for finding products using some criteria.

### Features
- User can search using product name, category, and brand.

- User can give a price range from minPrice to maxPrice to filter products within user's budget.

- User can sort products in ascending order: sortBy price or sortBy name.

### Screenshots

![alt text](/resources/image-p1.PNG)

## Payment Method

After adding products to cart, user will get the total amount to be paid and then user can make payment using payment option using the help of SSLCommerz payment gateway.

### Features

- User can select the payment method like bKash, Nagad.

- User will get a unique transaction id.

- If successfull transaction then success page will redirect to the cart page.

- After transaction the cart will be empty.

### Screenshots

![alt text](/resources/image-p2.PNG)

![alt text](/resources/image-p3.PNG)

![alt text](/resources/image-p4.PNG)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (at least version Node.js v18.13.0)
- [npm](https://www.npmjs.com/) (at least version v8: '10.2.154.23-node.21')

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Installation

**Clone the repository**

   ```bash
   go to any directory and then open your terminal using cmd
   
   git clone git@github.com:SQA-PROJECT-1/Konta-Niben.git

   **Insturctions for Backend** 

   cd backend
   
   npm install

   npm install express
   
   npm install dotenv

   npm install cors

   npm install nodemon

   npm install mongoose

   npm install sslcommerz-lts
   
   npm install uuid
   
   npm run dev

   **Insturctions for Frontend**

   cd ..
   
   cd client
   
   npm install

   npm install react-icons   

   npm install chart.js

   npm install react-chartjs-2 chart.js

   npm install jwt-decode

   npm install jsonwebtoken
   
   npm run dev

   follow the link to get the web application (link like this: http://localhost:5173/)

   then login is required and login with- Email: tazim@gmail.com and Password: 123

   then use this link(http://localhost:5173/home) to get to the home page where searching and sorting are done.
   ```

 **Continuous Integration Testing**

  This project includes continuous integration tests using GitHub Actions. The CI tests are automatically triggered on each push or making pull requests to this branch. You can view the workflow file [here](.github/workflows/palash_ci.yml).

### Testing

**Search and sort testing**

   ```bash
   npm test
   ```
   

### JSdoc

**Search and sort documentation**

   ```bash
   cd backend
   
   cd controllers
   
   cd productController
   
   cd out
   
   open searchAndSortProducts.js.html click the mouse right click and "open with Live server" button.
    ```
**Payment Method**

   ```bash

   cd backend
   
   cd controllers
   
   cd paymentController

   jsdoc orderAndPayment.js
   
   cd out
   
   open orderAndPayment.js.html click the mouse right click and "open with Live server" button.
  
  ```

## License  

This project is licensed under the MIT License.

## Ackowledgements

Special Thanks 💚 to our repected supervisor `Dr. Md. Musfique Anwar` and all the team members.

![alt text](/resources/imagep.PNG)