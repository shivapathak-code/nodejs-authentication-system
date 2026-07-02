# 🔐 Node.js Authentication System

A secure authentication system built with **Node.js, Express.js, MongoDB Atlas, JWT, and OTP-based Email Verification**. This project demonstrates modern authentication practices including user registration, login, email verification using OTP, JWT authentication, and protected routes.

---

## 🚀 Features

* 🔑 User Registration
* 📧 Email OTP Verification
* 🔐 Secure User Login
* 🛡️ JWT Authentication
* 👤 Protected Routes
* 🔒 Password Hashing using bcrypt
* ⏳ OTP Expiration & Validation
* ✉️ Email Sending Service
* ⚠️ Centralized Error Handling
* 🌐 MongoDB Atlas Integration
* 📂 Clean MVC Architecture
* 🔒 Environment Variable Configuration

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcrypt.js
* OTP Verification

### Email Service

* Nodemailer

### Development Tools

* Nodemon
* dotenv

---

## 📁 Project Structure

```text
nodejs-authentication-system/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── authController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   └── Otp.js
│
├── routes/
│   └── authRoutes.js
│
├── services/
│   └── emailService.js
│
├── utils/
│   └── generateToken.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── LICENSE
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/shivapathak-code/nodejs-authentication-system.git
cd nodejs-authentication-system
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### Start the Development Server

```bash
npm run dev
```

Server will start at:

```text
http://localhost:5000
```

---

## 📌 API Endpoints

| Method | Endpoint               | Description                    |
| ------ | ---------------------- | ------------------------------ |
| POST   | `/api/auth/register`   | Register a new user            |
| POST   | `/api/auth/verify-otp` | Verify email OTP               |
| POST   | `/api/auth/login`      | Login user                     |
| GET    | `/api/auth/profile`    | Get authenticated user profile |

---

## 🔒 Security Features

* Password Hashing with bcrypt
* JWT Authentication
* OTP-Based Email Verification
* Protected Routes
* Environment Variable Security
* MongoDB Atlas Integration

---

## 🚀 Future Improvements

* Password Reset via Email
* Refresh Tokens
* Google OAuth Login
* GitHub OAuth Login
* Two-Factor Authentication (2FA)
* Account Lockout Protection
* Rate Limiting

---

## 👨‍💻 Author

**Shiva Pathak**

GitHub: https://github.com/shivapathak-code

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you found this project helpful, please consider giving it a **⭐ Star** on GitHub.
