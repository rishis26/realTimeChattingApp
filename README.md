# 💬 Real-Time Chat Application

A modern, real-time chat application built with React, Socket.IO, and Express. Connect with friends and family through instant messaging with a clean, responsive interface.

![Chat App Demo](https://img.shields.io/badge/Status-Active-brightgreen) ![React](https://img.shields.io/badge/React-19.2.0-blue) ![Socket.IO](https://img.shields.io/badge/Socket.IO-4.8.3-black) ![Node.js](https://img.shields.io/badge/Node.js-Express-green)

## ✨ Features

- 🚀 **Real-time messaging** - Instant message delivery using WebSocket connections
- 🏠 **Room-based chat** - Join specific chat rooms with unique room IDs
- 👤 **User identification** - Personalized chat experience with usernames
- ⚡ **Fast & responsive** - Built with Vite for lightning-fast development and builds
- 🎨 **Clean UI** - Modern, intuitive interface for seamless chatting
- 📱 **Cross-platform** - Works on desktop and mobile browsers
- 🔄 **Auto-reconnection** - Handles connection drops gracefully

## 🛠️ Tech Stack

### Frontend

- **React 19.2.0** - Modern UI library with hooks
- **Vite** - Next-generation frontend tooling
- **Socket.IO Client** - Real-time bidirectional event-based communication
- **CSS3** - Custom styling for responsive design

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **Socket.IO** - Real-time engine for WebSocket connections
- **CORS** - Cross-origin resource sharing middleware

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd chat-application
   ```

2. **Install server dependencies**

   ```bash
   cd Server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../Client
   npm install
   ```

### Running the Application

1. **Start the server** (Terminal 1)

   ```bash
   cd Server
   npm run dev
   ```

   Server will run on `http://localhost:3000`

2. **Start the client** (Terminal 2)

   ```bash
   cd Client
   npm run dev
   ```

   Client will run on `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

## 📖 How to Use

1. **Enter your name** in the username field
2. **Choose a room number** to join a specific chat room
3. **Click "Join"** to enter the chat room
4. **Start chatting!** Type your message and press Enter or click the send button
5. **Invite friends** by sharing the same room number

## 🏗️ Project Structure

```
chat-application/
├── Client/                 # React frontend
│   ├── src/
│   │   ├── App.jsx        # Main app component
│   │   ├── chat.jsx       # Chat interface component
│   │   ├── main.jsx       # App entry point
│   │   └── *.css          # Styling files
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── Server/                # Express backend
│   ├── server.js          # Main server file
│   └── package.json       # Backend dependencies
└── README.md              # Project documentation
```

## 🔧 Configuration

### Environment Variables

Create `.env` files in both Client and Server directories if needed:

**Server/.env**

```env
PORT=3000
CLIENT_URL=http://localhost:5173
```

**Client/.env**

```env
VITE_SERVER_URL=http://localhost:3000
```

## 🚀 Deployment

### Server Deployment

1. Build the client: `cd Client && npm run build`
2. Deploy server to your preferred platform (Heroku, Railway, etc.)
3. Update CORS origins in `server.js`

### Client Deployment

1. Update server URL in client code
2. Build: `npm run build`
3. Deploy `dist` folder to static hosting (Vercel, Netlify, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Available Scripts

### Client

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Server

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## 🐛 Troubleshooting

### Common Issues

**Connection Issues**

- Ensure both server and client are running
- Check if ports 3000 and 5173 are available
- Verify CORS configuration in server.js

**Messages Not Sending**

- Check browser console for errors
- Verify Socket.IO connection status
- Ensure room joining was successful

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Socket.IO](https://socket.io/) for real-time communication
- [React](https://reactjs.org/) for the amazing UI library
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [Express.js](https://expressjs.com/) for the robust server framework

---

**Made with ❤️ by Rishi shah**

_Happy Chatting! 🎉_
