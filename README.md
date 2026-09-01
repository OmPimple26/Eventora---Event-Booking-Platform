# 🎟️ Eventora — Full-Stack Event Booking Platform

Eventora is a **full-stack MERN event booking platform** designed to simplify event discovery, ticket booking, and event administration. The platform provides secure authentication, OTP-based verification, role-based access control, event management, booking workflows, seat tracking, payment status management, email notifications, and an admin analytics dashboard.

---

## 🌐 Live Demo

- 🎨 Frontend: https://eventora-frontend-alpha.vercel.app/
- ⚙️ Backend API: https://eventora-backend-70xp.onrender.com/

---

## 🔑 Demo Admin Credentials

The **Admin Dashboard** is accessible only to authorized admin users.

- 📧 **Email:** `admin@eventora.com`
- 🔐 **Password:** `password123`

> ⚠️ These credentials are provided for demonstration and testing purposes only.

---

## 🚀 Key Features

### 🔐 Authentication & Security

* Secure user registration and login using **JWT authentication**.
* Password hashing with **bcrypt**.
* **Email OTP verification** for account activation.
* OTP verification required before finalizing event bookings.
* Protected API routes with authentication middleware.

### 👥 Role-Based Access Control

**Admin**

* Create, update, and delete events.
* Manage incoming booking requests.
* Approve or reject bookings.
* Update payment status as **Paid / Not Paid**.
* Monitor booking and revenue statistics.
* Access restricted to authorized admin users.

**User**

* Browse available events.
* View detailed event information.
* Submit ticket booking requests.
* Complete OTP verification for bookings.
* Track booking status from the personal dashboard.
* Cancel eligible bookings.

### 📅 Event Management

* Create and manage **free and paid events**.
* Event descriptions, categories, dates, images, and seating capacity.
* Dynamic event listings.
* Real-time seat availability tracking.

### 🎫 Smart Booking System

* OTP-based booking authorization.
* Booking requests initially enter a **Pending** state.
* Admin approval workflow for booking confirmation.
* Secure seat availability validation.
* Overbooking prevention.
* Booking cancellation functionality.
* Payment status tracking for paid events.

### 📊 Admin Analytics Dashboard

Provides administrators with important platform insights, including:

* 📌 Pending booking requests
* 👥 Confirmed users/clients
* 💰 Total revenue
* 🎟️ Confirmed paid bookings
* 📈 Event and booking statistics

### 📧 Email Notifications

* Automated email notifications using **Nodemailer**.
* OTP delivery through email.
* Booking confirmation notifications.

### 🎨 Modern UI/UX

* Responsive interface built with **React**.
* Styled using **Tailwind CSS**.
* Clean and intuitive navigation.
* Interactive components and micro-interactions.
* Responsive design for different screen sizes.

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ React.js
* 🎨 Tailwind CSS
* ⚡ Vite
* 🌐 Axios

### Backend

* 🟢 Node.js
* 🚂 Express.js
* 🔐 JWT
* 🔑 bcryptjs
* 📧 Nodemailer

### Database

* 🍃 MongoDB
* ☁️ MongoDB Atlas

### Development & Tools

* 📦 npm
* 🔀 Git & GitHub
* 📮 Postman
* 🔄 Concurrently

---

## 🏗️ Project Architecture

```text
Eventora/
│
├── client/                  # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── utils/
│   │   └── ...
│   └── package.json
│
├── server/                  # Node.js + Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── package.json
│
├── package.json             # Root development scripts
├── .gitignore
└── README.md
```

---

## 🔄 Application Workflow

```text
User
 │
 ├── Register / Login
 │
 ├── Email OTP Verification
 │
 ├── Browse Events
 │
 ├── Select Event
 │
 ├── Submit Booking Request
 │
 ├── Booking OTP Verification
 │
 └── Track Booking Status
            │
            ▼
      Admin Dashboard
            │
       ┌────┴────┐
       ▼         ▼
    Approve    Reject
       │
       ▼
Booking Confirmed
       │
       ▼
Email Notification
```

---

## 🔒 Security

Eventora implements multiple security mechanisms:

* 🔐 JWT-based authentication
* 🔑 Password hashing with bcrypt
* 📧 Email OTP verification
* 👮 Role-based authorization
* 🛡️ Protected backend routes
* 🎫 Booking validation and overbooking prevention
* 🔒 Environment variables for sensitive configuration

---

## ⚙️ Installation & Setup

### 📋 Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* MongoDB / MongoDB Atlas
* Git

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/OmPimple26/Eventora---Event-Booking-Platform.git
cd Eventora
```

### 2️⃣ Install Dependencies

From the project root:

```bash
npm install
npm run install:all
```

### 3️⃣ Configure Environment Variables

Create a `.env` file inside the `server` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_app_password
PORT=5000
```

> ⚠️ **Never commit `.env` files or credentials to GitHub.**

### 4️⃣ Start the Application

From the project root:

```bash
npm run dev
```

This starts both applications concurrently:

```text
Frontend → http://localhost:5173
Backend  → http://localhost:5000
```

---

## 📡 API Overview

| Module           | Example Endpoint       | Method |
| ---------------- | ---------------------- | ------ |
| Authentication   | `/api/auth/register`   | POST   |
| Authentication   | `/api/auth/login`      | POST   |
| OTP Verification | `/api/auth/verify-otp` | POST   |
| Events           | `/api/events`          | GET    |
| Event Management | `/api/events`          | POST   |
| Bookings         | `/api/bookings`        | POST   |
| User Bookings    | `/api/bookings/my`     | GET    |

---

## 📌 Future Enhancements

* 💳 Online payment gateway integration
* 🔔 Real-time booking notifications
* 📱 Progressive Web App support
* 📊 Advanced analytics and reporting
* 🎟️ QR-based ticket generation and validation
* ⭐ Event ratings and reviews
* 🔎 Advanced event search and filtering

---

## 👨‍💻 Author

**Om Pimple**

B.Tech Computer Engineering | Full-Stack Developer

---

### ⭐ Support

If you find this project useful, consider giving the repository a **⭐ Star** on GitHub!
