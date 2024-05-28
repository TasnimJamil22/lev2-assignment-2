 ## Instructions on how to run the application locally:

This application is built with Express.js, Mongoose, Node.js, TypeScript, Joi for input validation, and CORS middleware.

## Installation

1. Clone the repository to your local machine:

    
    git clone https://github.com/yourusername/lev2-assignment-2.git
  
2. Navigate to the project directory:

   
    cd lev2-assignment-2
 

3. Install dependencies:

    
    npm install
     

4. Build the TypeScript code:

    
    npm run build
   

## Configuration

1. Create a '.env' file in the root directory .

2. Update the '.env' file with your MongoDB connection URI and other configurations.

## Usage

To run the application locally, follow these steps:

1. Start the server:

    
    npm start
    

2. The server will start on `http://localhost:3000` by default.

## API Endpoints

### `GET /api/products`

- Retrieves all products.

### `GET /api/products/:priductId`

- Retrieves a specific product by ID.

### `POST /api/products`

- Creates a new product.

### `PUT /api/products/:id`

- Updates an existing product by ID.

### `DELETE /api/products/:id`

- Deletes a product by ID.

## Input Validation

Input validation is performed using Joi. Ensure that requests include valid data according to the defined schemas.

## CORS

Cross-Origin Resource Sharing (CORS) is enabled by default to allow requests from different origins.
