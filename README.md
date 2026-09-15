# 🔐 Authentication UI

A modern and responsive authentication interface built with **React and TypeScript**. This project demonstrates a complete frontend authentication flow including user registration, login validation, protected routes, password reset simulation, dashboard access, logout functionality, and persistent dark mode.

## 🚀 Live Demo

**[Authentication UI — Live Demo](https://authentication-ui-seven.vercel.app/)**

## 📂 GitHub Repository

**[Authentication UI — GitHub](https://github.com/Mobin977/authentication-ui)**

---

## ✨ Features

- 🔐 User registration
- 🔑 Login authentication
- 📧 Email validation
- 🔒 Password validation
- 💪 Password strength indicator
- ❌ Incorrect password detection
- 👤 User account information
- 🔄 Forgot password flow
- 🛡️ Protected dashboard routes
- 🚪 Logout functionality
- 🌙 Dark mode
- ☀️ Light mode
- 💾 Theme persistence
- 📦 LocalStorage authentication data
- 🗂️ SessionStorage authentication
- 📱 Responsive design
- ⚡ Fast Vite development environment
- 🎨 Modern authentication UI
- 🔔 Form validation and error messages

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- React Router
- Lucide React
- CSS3
- Vite

### Browser Storage

- LocalStorage
- SessionStorage

### Deployment

- Vercel

### Version Control

- Git
- GitHub

---

## 🔑 Authentication Flow

The application follows a complete frontend authentication flow:

```text
Register
   ↓
Create Account
   ↓
User Stored in LocalStorage
   ↓
Login
   ↓
Validate Email + Password
   ↓
Authenticated User
   ↓
Protected Dashboard
   ↓
Logout
   ↓
Login Page
```

---

## 📄 Pages

### 🔐 Login

Users can:

- Enter email
- Enter password
- Show/hide password
- Remember login
- Sign in
- Navigate to registration
- Navigate to forgot password

### 📝 Register

Users can create an account using:

- Full name
- Email
- Password
- Confirm password

The registration system validates:

- Required fields
- Email format
- Password length
- Password strength
- Password confirmation
- Duplicate email addresses

### 🔄 Forgot Password

Users can enter their registered email address.

The application checks whether the account exists and displays the appropriate response.

> Note: Password reset is simulated on the frontend and does not send a real email.

### 📊 Dashboard

Authenticated users can view:

- Full name
- Email address
- Authentication status
- Account status

The dashboard also includes:

- Dark/light theme toggle
- Logout functionality
- Protected route access

---

## 🛡️ Protected Routes

The dashboard is protected using a reusable `ProtectedRoute` component.

If a user is not authenticated and attempts to access:

```text
/dashboard
```

they are automatically redirected to:

```text
/login
```

---

## 🌙 Dark Mode

The application includes persistent dark mode.

Theme preferences are stored in:

```text
localStorage
```

Therefore, the selected theme remains active after refreshing the page.

---

## 📸 Screenshots

### Login

![Login](./src/assets/login.png)

### Register

![Register](./src/assets/register.png)

### Forgot Password

![Forgot Password](./src/assets/forgot-password.png)

### Dashboard

![Dashboard](./src/assets/dashboard.png)

### Dark Mode

![Dark Mode](./src/assets/dark-mode.png)

> Add your screenshots to `src/assets/` using the filenames above.

---

## 📁 Project Structure

```text
authentication-ui/
│
├── src/
│   ├── assets/
│   │   ├── login.png
│   │   ├── register.png
│   │   ├── forgot-password.png
│   │   ├── dashboard.png
│   │   └── dark-mode.png
│   │
│   ├── components/
│   │   ├── ProtectedRoute.tsx
│   │   └── ThemeToggle.tsx
│   │
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── ForgotPassword.tsx
│   │   └── Dashboard.tsx
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── public/
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Mobin977/authentication-ui.git
```

Navigate into the project:

```bash
cd authentication-ui
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:5173
```

---

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🔒 Security Note

This project is designed as a **frontend authentication learning project**.

User credentials are stored in browser storage for demonstration purposes.

This approach is **not suitable for production authentication** because passwords should never be stored as plain text in LocalStorage or SessionStorage.

A production authentication system should use:

- Backend authentication
- Password hashing such as bcrypt
- Secure database storage
- HTTP-only cookies or secure token handling
- JWT/session management
- Server-side authorization
- Email-based password reset
- HTTPS

---

## 🎯 Learning Objectives

This project helped me practice:

- React component architecture
- TypeScript interfaces
- React Router
- Form handling
- Form validation
- Authentication logic
- LocalStorage
- SessionStorage
- Protected routes
- React hooks
- Dark mode
- Responsive CSS
- Reusable components
- Git and GitHub
- Vercel deployment

---

## 🚀 Future Improvements

- Add a Node.js + Express backend
- Add PostgreSQL/MongoDB database
- Hash passwords with bcrypt
- Implement JWT authentication
- Add real email password reset
- Add email verification
- Add refresh tokens
- Add OAuth login
- Add role-based authorization
- Add backend API validation

---

## 👨‍💻 Author

**Mobin Shaik**

- GitHub: [Mobin977](https://github.com/Mobin977)
- LinkedIn: [Mobin Shaik](https://www.linkedin.com/in/mobin-shaik-65900541/)

---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

---

**Built with ❤️ using React + TypeScript**
