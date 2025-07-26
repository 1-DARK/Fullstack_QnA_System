# Fullstack Q&A System

A full-stack question and answer system built with modern web technologies.

## Features

- User authentication and authorization
- Question posting and answering
- Upvoting/downvoting system
- Rich text editing
- Search functionality
- Responsive design

## Technologies Used

### Frontend
- React.js
- Redux (for state management)
- Material-UI (for UI components)
- Axios (for HTTP requests)

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- JWT (for authentication)

## Installation

### Prerequisites
- Node.js (v14 or later)
- MongoDB (running locally or connection string)
- Git

### Steps
1. Clone the repository:
```bash
git clone https://github.com/1-DARK/Fullstack_QnA_System.git
cd Fullstack_QnA_System
```

2. Install dependencies for both frontend and backend:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables:
- Create a `.env` file in the backend directory with the following:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

4. Run the application:
```bash
# From the project root directory

# Start backend server
cd backend
npm start

# In a new terminal, start frontend
cd ../frontend
npm start
```

The application should now be running:
- Backend: http://localhost:5000
- Frontend: http://localhost:3000

## Configuration

You can modify the following configuration options:

1. Backend port: Change the `PORT` in `.env`
2. Database: Update `MONGO_URI` to point to your MongoDB instance
3. Frontend API base URL: Modify `src/config.js` in the frontend

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact [Your Name] at [your.email@example.com]
