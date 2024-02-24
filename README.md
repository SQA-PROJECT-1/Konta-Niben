
# Project Name: Konta-Niben

## Table of Contents

- [Project Name](#project-name-konta-niben)
  - [Used Technology](#used-technology)
  - [Add To Cart](#add-to-cart)
  - [Product Details](#product-details)
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

## Add To Cart
The "Add to Cart" feature enhances the shopping experience by allowing users to conveniently gather desired items for purchase. It enables users to swiftly select products they intend to buy and accumulate them into a virtual shopping cart, facilitating a smooth and efficient shopping process. 


## Product Details
The "Product Details" feature provides comprehensive information about individual products, empowering users to make informed purchasing decisions. It offers a detailed view of each product's attributes, specifications, pricing and allowing users to assess the suitability of the product based on their preferences and requirements.


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

  **Instructions for Frontend** 

  ```bash
   
   cd client

   npm install

   npm install react-icons   

   npm install chart.js

   npm install react-chartjs-2 chart.js
   
   npm run dev

   follow the link to get the web application (link like this: http://localhost:5173/)

   then login is required and login with- `Email: tazim@gmail.com` and `Password: 123`

   then use this link(http://localhost:5173/home) to get to the home page where you will find Details and Add to cart button. Clicking the details will send u another page where you will view the product details for each product. clicking the add the cart will add product to the cart. In cart icon when you click it, it will take you another page where you can view all the product in the cart. In there you can remove the product keep it in the cart. products.

   ```
   
### Testing
 
 **Unit Testing**

   ```bash
   cd backend
	
   npm install -g jest

   npm test
   ```

  **Continuous Integration Testing**

  This project includes continuous integration tests using GitHub Actions. The CI tests are automatically triggered on each push or making pull requests to this branch. You can view the workflow file [here](.github/workflows/monira_ci.yml).


### JSdoc

  **Add to cart Documentation:**

   ```bash

   cd backend
   
   cd controllers
   
   cd addToCartController

   jsdoc addTocart.js
   
   cd out
   
   open addTocart.js.html click the mouse right click and "open with Live server" button.
    
  ```

  **Product Details:**

   ```bash

   cd backend
   
   cd controllers
   
   cd productControllers

   jsdoc getProductsById.js
   
   cd out
   
   open getProductsById.js.html click the mouse right click and "open with Live server" button.
  
  ```

## License  

This project is licensed under the MIT License.

## Ackowledgements

Special Thanks 💚 to our repected supervisor `Dr. Md. Musfique Anwar` and all the team members.
