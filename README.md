

# The World De Espanol Blog Project

## Overview

The World De Espanol is a full-stack blog project that uses React for the frontend and Express for the backend. The goal of the project is to provide a platform for users to share and explore content related to the Spanish-speaking world.

## Technologies Used

- **Frontend: React**
  - Create React App was used to bootstrap the project.
  - Additional dependencies include Axios for API calls.

- **Backend: Express**
  - Bcrypt: Used for password hashing.
  - Body-parser: Middleware to parse incoming request bodies.
  - Cors: Enables Cross-Origin Resource Sharing.
  - Cloudinary: Integrated for image and media storage.
  - Mongoose: ODM for MongoDB, used for database interactions.
  - Dotenv: Allows environment variables to be set in a file.
  - Nodemon: Used for automatic server restarts during development.

## Project Structure

The project is structured into two main parts: the frontend (client) and the backend (server).

### Frontend (Client)

The frontend is built using React. Key directories and files include:

- `src/`
  - `components/`: Reusable React components.
  - `pages/`: Different pages of the blog.
  - `services/`: Axios service for API calls.

### Backend (Server)

The backend is built using Express. Key directories and files include:

- `server/`
  - `models/`: Mongoose models for data structure.
  - `routes/`: Express routes for handling API requests.
  - `middleware/`: Middleware functions, such as authentication.
  - `config/`: Configuration files, including environment variables.
  - `index.js`: Main server file.


