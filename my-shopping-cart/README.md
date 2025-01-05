Product List App (React)
A product listing app built with React to display a range of tech products, manage their quantities, and calculate the total price. This app uses a context provider for managing the state of products in the cart, and allows users to increase or decrease product quantities.

Features
Product List: Displays a variety of tech products such as iPhone, MacBook, iPad, Apple Watch, AirPods, and more.
Product Details: Each product displays essential details like name, description, price, sustainability features, and an image.
Quantity Management: Increase or decrease the quantity of products in the cart.
Total Calculation: Automatically updates the total price and quantity based on user interactions.
Sustainability Information: Each product includes details on its sustainability efforts.
Technologies Used
React: For building the frontend of the app.
React Context & useReducer: To manage global state for products and total amounts.
CSS: For styling the components.
Installation
To run the app locally:

Clone the repository:

bash
Copy code
git clone https://github.com/Faisal-rio/product-list-app.git
Navigate to the project directory:

bash
Copy code
cd product-list-app
Install the dependencies:

bash
Copy code
npm install
Run the app:

bash
Copy code
npm start
Open your browser and go to http://localhost:3000.

Folder Structure
/src:
/components: Contains React components such as ProductList, ProductCard, Footer, and Header.
/context: Contains the ProductContext which manages the global state using useReducer.
/images: Contains the product images (make sure to adjust paths if required).
/styles: Contains all CSS files for styling the app.
Components
ProductContext
A context provider that manages the product state, including the product list, total quantity, and total amount. It uses useReducer for state management.

ProductList
The main component that renders a list of products, displaying each product using the ProductCard component. It also shows the total price and shipping info.

ProductCard
Displays each individual product's details, including name, description, price, and sustainability information. It also includes buttons for increasing and decreasing the quantity of the product.

Footer
A simple footer with copyright information.

Header
The app header displaying the title of the product list.

Future Enhancements
Remove Product: Add functionality to remove products from the list.
Checkout Process: Implement a checkout page with payment integration.
User Authentication: Allow users to log in and save their cart items.
License
This project is licensed under the MIT License.


netlify link : https://07contextapizz3.netlify.app/ 
