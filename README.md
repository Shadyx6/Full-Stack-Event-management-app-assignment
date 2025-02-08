# 🎉 Full-Stack Event Management App

A full-stack event management application where users can create, view, and manage events with authentication and image uploads.

## 🚀 Live Demo

- **Frontend:** [https://event-management-app-swart.vercel.app](https://event-management-app-swart.vercel.app)
- **Backend API:** [https://full-stack-event-management-app.onrender.com/api](https://full-stack-event-management-app.onrender.com/api)

## ✨ Features
✅ User Authentication (JWT)
✅ Create, Edit, and Delete Events
✅ Filter Events by Date & Category
✅ Image Uploads via Cloudinary
✅ Fully Responsive UI with TailwindCSS

## 🛠️ Technologies Used

- **Frontend:** React, Vite, TailwindCSS
- **Backend:** Node.js, Express.js, MongoDB, Cloudinary
- **Database:** MongoDB Atlas
- **Deployment:** Vercel (Frontend), Render (Backend)

## 📜 Setup & Installation

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/yourusername/event-management-app.git
cd event-management-app
```

### 2️⃣ **Install Dependencies**
```sh
cd backend && npm install
cd ../frontend && npm install
```

### 3️⃣ **Setup Environment Variables**

#### **Backend (`backend/.env`)**
```env
MONGO_URI=mongodb+srv://yourusername:yourpassword@cluster0.mongodb.net/event_management?retryWrites=true&w=majority
JWT_SECRET=your-secret-key
CLOUDINARY_URL=your-cloudinary-url
CLIENT_URL=https://event-management-app-swart.vercel.app
```

#### **Frontend (`frontend/.env`)**
```env
VITE_API_URL=https://full-stack-event-management-app.onrender.com/api
```

### 4️⃣ **Run the Project Locally**
```sh
# Start Backend
cd backend
npm start

# Start Frontend
cd ../frontend
npm run dev
```

## 🎯 API Endpoints

| Method | Endpoint         | Description                  |
|--------|-----------------|------------------------------|
| POST   | `/api/auth/register` | Register a new user       |
| POST   | `/api/auth/login`    | Login user and get token  |
| GET    | `/api/events`        | Get all events            |
| POST   | `/api/events`        | Create an event (Protected) |

## 🚀 Deployment

- **Frontend:** Deployed on **Vercel**
- **Backend:** Deployed on **Render**

## 🔥 Performance & Scalability

- **Handles multiple users efficiently** with JWT authentication
- **Optimized database queries** using MongoDB indexing
- **Cloud-based image storage (Cloudinary)** for efficient media handling
- **Fast frontend build** using Vite for optimal performance

## 📌 License
This project is open-source and free to use.

