# Realtime-AI-Chat-App
A full-stack real-time chat application with an integrated AI assistant. Built using Nest.js, TypeORM, and PostgreSQL for the backend, with WebSockets for live communication, and an Ollama 3-powered LLM for AI interactions. The frontend is built with HTML and CSS.

### Current Integrations
- **Backend Framework:** Nest.js
- **Database:** PostgreSQL configured with TypeORM
- **Authentication:** User sign-up and login with `bcrypt` password hashing and `JWT` (JSON Web Tokens) for authentication.
- **Real-time Communication:** WebSocket gateway implemented with `@nestjs/websockets` and `socket.io` for real-time messaging.