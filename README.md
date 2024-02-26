# Project Name: Konta-Niben

## Description

The purpose of our project (Konta-Niben) is to establish a user-friendly and efficient platform dedicated to selling products directly to customers. The primary objective is to provide a seamless and enjoyable shopping experience for individuals looking to purchase our products.

## Table of Contents

- [Project Name](#project-name-konta-niben)
  - [Description](#description)
  - [Team Members](#team-members)
  - [Used Technology](#used-technology)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
      - [Instructions for Backend](#instructions-for-backend)
      - [Instructions for Frontend](#instructions-for-frontend)
    - [Testing](#testing)
      - [Unit Testing](#unit-testing)
      - [Continuous Integration Testing](#continuous-integration-testing)
    - [JSdoc](#jsdoc)
  - [Homepage with Searching, Sorting and Filtering](#search-sort)
    - [Features](#features)
    - [Screenshots](#screenshots)
  - [Product Details](#product-details)
    - [Features](#features)
    - [Screenshots](#screenshots) 
  - [Product Recommendation](#product-recommendation)
    - [Features](#features-1)
    - [Screenshots](#screenshots-1)
  - [Wishlist Method](#wishlist)
    - [Features](#features)
    - [Screenshots](#screenshots)
  - [Add to Cart Method](#add-to-cart)
    - [Features](#features)
    - [Screenshots](#screenshots)
  - [Review and Ratings](#review-ratings)
    - [Features](#features)
    - [Screenshots](#screenshots)
  - [Payment Method](#payment-method)
    - [Features](#features)
    - [Screenshots](#screenshots)
  - [Admin Dashboard](#admin-dashboard)
    - [Features](#features)
    - [Screenshots](#screenshots)
  
  - [License](#license)
  - [Acknowledgments](#acknowledgments)


## Team Members:

Team Name: *JU_Pioneers*

1. `Nurun Nahar Fiha` 
2. `Md. Parvej Hoque Palash` 
3. `Seaum Ahmed Tazim` 
4. `Md. Sakib Mollah` 
5. `Serajum Monira`

Batch-48, Department of CSE, Jahangirnagar University

## Used Technology  

The following technologies were used in this project:

- Node.js
- Express.js
- MongoDB
- React.js
- Chart.js
- Tailwind CSS
- Jest
- JSDoc
- GitHub Actions
- VS Code


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

   npm install sslcommerz-lts
   
   npm install uuid
   
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

   npm install jwt-decode

   npm install jsonwebtoken
   
   npm run dev

   follow the link to get the web application (link like this: http://localhost:5173/)

   then login is required and login with- `Email: tazim@gmail.com` and `Password: 123`

   then use this link(http://localhost:5173) to get the dashboard page 

   ```
   
### Testing
 
 **Unit Testing**

   ```bash
   cd backend
	
   npm install -g jest

   npm test

   ```

  **Continuous Integration Testing**

  This project includes continuous integration tests using GitHub Actions. The CI tests are automatically triggered on each push or making pull requests to this branch. You can view the workflow file [here](.github/workflows/master_CI.yml).


### JSdoc


## Homepage with Searching, Sorting and Filtering

Here Searching and sorting are done for finding products using some criteria.

### Features
- User can search using product name, category, and brand.

- User can give a price range from minPrice to maxPrice to filter products within user's budget.

- User can sort products in ascending order: sortBy price or sortBy name.

### Screenshots

![alt text](/resources/image-p1.PNG)

## Product Details
The "Product Details" feature provides comprehensive information about individual products, empowering users to make informed purchasing decisions. It offers a detailed view of each product's attributes, specifications, pricing and allowing users to assess the suitability of the product based on their preferences and requirements.

## Product Recommendation

The Product Recommendation feature allows users to receive recommendations for products based on specified criteria such as product category, targeted age group, skin type, and concerns. It fetches products from the database that match the provided criteria and returns them to the user.

### Features

- Retrieves product recommendations based on specified criteria.

- Fetches products from the database that match the provided criteria such as product category, targeted age group, skin type, and concerns.

- Handles errors gracefully and returns appropriate error messages.

### Screenshots

![alt text](/resources/image-2.png)

![alt text](/resources/image-3.png)

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

## Admin Dashboard

The Admin Dashboard feature is designed to provide administrators with valuable insights and metrics about products and users within the system. It aggregates data from the backend server and presents it in a user-friendly interface for easy visualization and analysis.

### Features
- Display total number of products and users.

- Visualize product statistics by category, subcategory, and brand.

- Utilizes charts to present data in a clear and intuitive manner.

### Screenshots

![alt text](/resources/image-1.png)

    
## License  

This project is licensed under the MIT License.

## Ackowledgements

Special Thanks 💚 to our repected supervisor `Dr. Md. Musfique Anwar` and all the team members.


