
# Nakama Chat - Frontend

This is the frontend for **Nakama Chat**, a real-time chat application built using React, Vite, and Axios. It connects to a Node.js backend and interacts with the Chat Engine API to handle user authentication and messaging.

## Features

- User authentication and chat interaction using Chat Engine API.
- Real-time messaging.
- Responsive design.

## Technologies Used

- React
- Vite
- Axios
- Chat Engine API

## Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following contents:
   ```
   VITE_BACKEND_URL=http://localhost:3001
   VITE_CHAT_ENGINE_PROJECT_ID=your_project_id
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Access the application on `http://localhost:5173`.

## Project Structure

- `/src`: Contains the main React components and pages.
- `/components`: Holds reusable UI components.
- `/pages`: Contains the main page components like `AuthPage` and `ChatPage`.

## Copyright (C) 2024

William Gomez All rights reserved.
