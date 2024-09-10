
# Nakama Chat - Backend

This is the backend for **Nakama Chat**, a chat application built with Node.js, Express, and Axios. It communicates with the [Chat Engine API](https://chatengine.io) to handle chat-related features such as authentication, message sending, and chat management.

## Features

- User authentication using Chat Engine API.
- Proxying requests to the Chat Engine for real-time chat management.
- Secure communication between the frontend and Chat Engine.

## Technologies Used

- Node.js
- Express.js
- Axios
- Chat Engine API

## Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following contents:
   ```
   CHAT_ENGINE_USER_URL=chat_engine_users_url
   CHAT_ENGINE_PK=your_private_key
   PORT=your_port
   ```

3. Start the server:
   ```
   npm run dev
   ```

4. The server will be running on `http://localhost:PORT`.

## API Endpoints

- `POST /authenticate`: Authenticates users using the Chat Engine API.

## Copyright (C)

William Gomez. All rights reserved.