# Connectverse Backend API

## Project Description

This project is a Node.js API that handles user registration and authentication for a fictional social media platform called "Connectverse". The API implements secure registration, login, and JWT-based authentication, following best practices.

## Technology Stack

- Node.js and npm
- Express.js
- MongoDB (or any other database of your choice)
- jsonwebtoken library for JWT generation and validation

## API Endpoints

### POST /signup
- Registers a new user with provided username, email, and password.
- Validates input, ensures unique usernames and emails, hashes passwords securely.
- Stores user data in the database.
- Returns a success message and JWT token upon successful registration.

### POST /login
- Authenticates a user with provided username/email and password.
- Validates credentials against the database.
- Generates and returns a JWT token upon successful authentication.
- Returns an error message if authentication fails.

### GET /songs
- Retrieves all songs.
- Requires authentication via JWT token.

### POST /sendEmail
- Sends an email.
- Requires authentication via JWT token.

## JWT Implementation

- Generate JWT tokens with appropriate payload and expiration time upon successful login.
- Validate JWT tokens in protected routes to ensure user authentication.
- Implement robust token refresh mechanisms if desired.

## Setup Instructions

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd connectverse-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/0) file in the root directory and add the following environment variables:
    ```env
    PORT=3000
    MONGODB_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    ```

4. Start the server:
    ```bash
    npm start
    ```

### Running the API

1. **Signup**:
    - Endpoint: `POST /signup`
    - Request Body:
        ```json
        {
            "username": "your-username",
            "email": "your-email",
            "password": "your-password"
        }
        ```

2. **Login**:
    - Endpoint: `POST /login`
    - Request Body:
        ```json
        {
            "username": "your-username",
            "password": "your-password"
        }
        ```

3. **Get All Songs**:
    - Endpoint: `GET /songs`
    - Headers:
        ```json
        {
            "Authorization": "Bearer <your-jwt-token>"
        }
        ```

4. **Send Email**:
    - Endpoint: `POST /sendEmail`
    - Request Body:
        ```json
        {
            "to": "recipient-email",
            "subject": "email-subject",
            "message": "email-message"
        }
        ```
    - Headers:
        ```json
        {
            "Authorization": "Bearer <your-jwt-token>"
        }
        ```

