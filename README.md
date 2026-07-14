# 🎓 SkillSphere – Online Learning Platform

SkillSphere is a modern online learning platform built with **Next.js 15**, where users can discover courses, search by category, explore instructors, and manage their learning profile through secure authentication.

🔗 **Live Site:** https://skillspheres-ochre.vercel.app/

---

# 📖 Project Description

Finding quality online courses from different sources can be time-consuming and confusing. SkillSphere solves this problem by providing a clean, responsive, and user-friendly platform where learners can easily browse, search, and explore educational courses in one place.

The platform offers secure authentication, protected course pages, instructor profiles, search functionality, and a modern UI to create an enjoyable learning experience.

---

# ✨ Features

- 🔐 Secure Authentication (Email/Password & Google Login)
- 👤 User Registration and Login
- 👤 User Profile Page
- ✏️ Update User Profile
- 🛡️ Protected Routes (Course Details & My Profile)
- 🔄 Redirect back to the requested page after successful login
- 🔍 Search Courses by Title
- 📚 Course Details Page
- 🧑‍🏫 Instructor Listing
- 🔥 Trending Courses Section
- 🎉 Toast Notifications for Authentication & Trending Courses
- ⚡ Server-side Data Fetching
- 📱 Fully Responsive Design
- ❌ Custom 404 Not Found Page
- ⏳ Loading UI while Fetching Data
- 🚀 Optimized Image Loading
- 🌙 Clean and Modern User Interface

---

# 🚀 Tech Stack

### Frontend

- Next.js 15 (App Router)
- React 19
- Tailwind CSS
- DaisyUI
- React Hot Toast
- React Icons

### Authentication

- Better Auth
- Google OAuth

### Backend

- Next.js Route Handlers
- MongoDB Atlas

### Database

- MongoDB

### Deployment

- Vercel

---

# 📂 Pages

- Home
- Courses
- Course Details (Protected)
- Instructors
- Login
- Register
- My Profile (Protected)
- Update Profile
- 404 Not Found

---

# 🔒 Authentication Features

- Email & Password Authentication
- Google Sign In
- Protected Routes
- Session Management
- Automatic Redirect After Login
- Logout Functionality

---

# 💡 Problems This Project Solves

- Makes online course discovery simple and organized.
- Provides a secure authentication system for learners.
- Prevents unauthorized access to protected course content.
- Allows users to easily manage their profile.
- Helps users quickly find courses using search functionality.
- Highlights trending courses to improve course discovery.
- Provides a responsive learning experience across all devices.

---

# ⚙️ Challenges Faced During Development

Building SkillSphere involved several real-world challenges, including:

- Implementing Better Auth with Next.js App Router
- Configuring Google OAuth Authentication
- Managing protected routes with automatic redirection
- Redirecting users back to the intended page after login
- Handling session management correctly
- Working with MongoDB Atlas in production
- Deploying Better Auth securely on Vercel
- Managing environment variables for production
- Handling server-side data fetching
- Creating reusable and responsive UI components
- Implementing toast notifications without affecting user experience

---

# 📁 Project Structure

```
src
│
├── app
│   ├── api
│   ├── courses
│   ├── instructors
│   ├── login
│   ├── register
│   ├── my-profile
│   ├── update-profile
│   └── not-found
│
├── components
│   ├── home
│   ├── courses
│   ├── profile
│   └── shared
│
├── providers
│
├── services
│
└── lib
```

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/your-username/skillsphere.git
```

Go to the project directory

```bash
cd skillsphere
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file and add the following variables:

```env
BETTER_AUTH_SECRET=

BETTER_AUTH_URL=

NEXT_PUBLIC_APP_URL=

MONGODB_URI=

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=
```

---

# 🚀 Deployment

This project is deployed on **Vercel**.

Live Site:

https://skillspheres-ochre.vercel.app/

---

# 👨‍💻 Author

**Jihad Soyon**

GitHub: https://github.com/jihadsoyon

LinkedIn: https://www.linkedin.com/in/jihad-soyon/

---

# ⭐ Future Improvements

- Course Enrollment System
- Wishlist Feature
- Student Dashboard
- Instructor Dashboard
- Course Reviews & Ratings
- Payment Integration
- Video Lessons
- Progress Tracking
- Certificates
- Admin Dashboard

---

If you like this project, don't forget to ⭐ the repository.
