# E-Commerce Application

This is a **basic e-commerce web application** built with **React**. It includes features such as browsing and purchasing products, viewing product details, and managing a shopping cart. All shopping cart data and order data are stored in the **local storage**, and the app does not interact with a backend or database. The application is primarily designed to showcase **React features** like **React Router**, **global context**, **state management** using `useState`, and **navigation** using `useNavigate`.

## Features


- **Product Listing**: Displays a grid of featured products with images, titles, and prices. The list is fetched from the **dummyjson.com API** using a simple API call (`https://dummyjson.com/products`).
- **Product Details**: Allows users to click on a product to view its detailed information, including the product image, description, and price. Product details are fetched via an API call using the product's unique ID (`https://dummyjson.com/products/{id}`).
- **Add to Cart**: Users can add products to the cart. The "Add to Cart" button disables once a product is added to the cart to prevent duplicates.
- **Shopping Cart**: Users can manage their cart, where items are added and removed. The shopping cart data is stored in **local storage**.
- **Basic Checkout**: Users can view their cart items, proceed to checkout, and place an order. Cart and order data are stored in **local storage** for persistence.
- **State Management**: The application uses **React Context** (`ShoppingCartContext`) and **useState** to manage global state for product details, cart items, and loading status.
- **React Router**: Navigation between pages is handled using **React Router** (`useNavigate`, `useParams`) for product listing, product details, and checkout pages.
- **Responsive Design**: Built with **Tailwind CSS** and **Bootstrap** for responsive layouts and UI components.
- **Loading Indicator**: Displays a loading spinner using `react-loading-indicators` while fetching product data.

## Technologies Used

- **Frontend**: React, React Router, Tailwind CSS, Bootstrap
- **State Management**: React Context API, `useState`
- **Local Storage**: Shopping cart and order data are saved to local storage for persistence across page refreshes.
- **Loading Indicator**: `react-loading-indicators`
- **CSS**: Tailwind CSS, Bootstrap


## Usage

Once the application is running:

- **Product List**: Browse featured products on the homepage. Each product displays its title, image, and price.
- **Product Details**: Click on a product to view its detailed information, such as a larger image, description, and price.
- **Add to Cart**: Add items to the shopping cart by clicking the "Add to Cart" button. The cart is updated, and the button is disabled once an item is in the cart.
- **Shopping Cart**: Access the cart and see all the products added. Users can remove items from the cart and proceed to checkout.
- **Checkout**: View the order summary in the checkout page and complete the checkout process. The order is stored in the local storage.

All shopping cart and order data is saved to **local storage**, so even after a page refresh, the cart and order details are retained.

This application is built as a demonstration to understand and work with **React features**, including:

- React Router for navigation.
- React Context for global state management.
- `useState` for local state management.
- `useNavigate` for navigation between pages.
- Bootstrap and Tailwind CSS for UI design and responsiveness.

Feel free to modify and expand this project to integrate additional features or to build a full-fledged e-commerce app with a backend.

---



