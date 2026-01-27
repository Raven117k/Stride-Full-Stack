<p align="left">
  <img src="./icon.png" alt="Stride Logo" width="120" />
</p>

# Stride — Full-Stack Fitness Tracker

Welcome to **Stride** — a comprehensive full-stack fitness tracker application built with React, Tailwind CSS, Express.js, and MongoDB.  
This project provides a complete solution for tracking workouts, managing user authentication, and navigating fitness features with a sleek, modern design.

> 🚀 *This repository includes both frontend and backend components for a complete fitness tracking experience.*

---

## 📌 Features

- 🚀 **Responsive Layout:** Optimized for mobile, tablet, and desktop  
- 📋 **User Authentication:** Secure login and signup with JWT tokens  
- 🎨 **Dark Themed UI:** Custom Tailwind CSS theme with clean, modern components  
- 🌐 **React Router Integration:** Seamless client-side navigation  
- 💪 **Fitness-Focused UX:** Workout tracking, meal planning, progress monitoring  
- 🔐 **Protected Routes:** Role-based access for users and admins  
- 🗄️ **MongoDB Integration:** Persistent data storage with Mongoose  
- 🛡️ **Security:** Password hashing with bcrypt and CORS support  

---

## 🛠 Technologies

### Frontend
- **React** — UI library  
- **Tailwind CSS** — Utility-first styling  
- **React Router DOM** — Routing  
- **Framer Motion** — Animations  
- **Create React App** — Project scaffold  
- **Material Symbols** — Icons  

### Backend
- **Express.js** — Web framework  
- **MongoDB** — NoSQL database  
- **Mongoose** — ODM for MongoDB  
- **JWT** — Authentication tokens  
- **bcryptjs** — Password hashing  
- **CORS** — Cross-origin resource sharing  

---

## 📁 Full Folder Structure

```
Stride-React/
├── README.md
├── Backend/
│   ├── package.json
│   ├── server.js
│   ├── middleware/
│   │   └── auth.js
│   ├── Models/
│   │   └── userSchema.js
│   └── Routes/
│       ├── authRoutes.js
│       └── protectedRoutes.js
└── Frontend/ 
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    ├── tailwind.config.js
    ├── build/
    │   ├── asset-manifest.json
    │   ├── index.html
    │   ├── manifest.json
    │   ├── robots.txt
    │   └── static/
    │       ├── css/
    │       │   └── main.67ff7ed3.css
    │       ├── js/
    │       │   ├── main.4ad52ac7.js
    │       │   └── main.4ad52ac7.js.LICENSE.txt
    │       └── media/
    ├── public/
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    └── src/
        ├── App.jsx
        ├── index.css
        ├── index.js
        ├── AdminPanel/
        │   ├── AdminContent.jsx
        │   ├── AdminDashboard.jsx
        │   ├── AdminSettings.jsx
        │   ├── AdminUsers.jsx
        │   └── components/
        │       ├── AdminLayout.jsx
        │       ├── Header.jsx
        │       └── Sidebar.jsx
        ├── assets/
        │   ├── Fonts/
        │   └── images/
        ├── Components/
        │   └── ProtectedRoute.js
        ├── DisplaySite/
        │   ├── Features.jsx
        │   ├── MainHome.jsx
        │   └── Pricing.jsx
        └── UserPanel/
            ├── Dashboard.jsx
            ├── Login.jsx
            ├── MealPlanner.jsx
            ├── Notification.jsx
            ├── Progress.jsx
            ├── Settings.jsx
            ├── Signup.jsx
            ├── Training.jsx
            └── components/
                ├── Grid.jsx
                ├── Header.jsx
                ├── Sidebar.jsx
                └── UserLayout.jsx
```

---

## 🚀 Getting Started

Follow these instructions to set up and run the full-stack application locally.

### 🔧 Requirements

- **Node.js** (v14 or higher)  
- **npm** or **yarn**  
- **MongoDB** (local or cloud instance like MongoDB Atlas)  

Verify installations:
```bash
node --version
npm --version
```

### 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Raven117k/Stride.git
   cd Stride-React
   ```

2. **Set up Backend:**
   ```bash
   cd Backend
   npm install
   ```
   Create a `.env` file in the `Backend` directory with or you can use the default one which is already created in `Backend` Folder:
   ```
   MONGO_URI=mongodb://localhost:27017/stridedb  # or your MongoDB URI
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   ```

3. **Set up Frontend:**
   ```bash
   cd ../Frontend  
   npm install
   ```

---

## ▶️ How to Run

1. **Start the Backend Server:**
   ```bash
   cd Backend
   node server.js
   ```
   The backend will run on `http://localhost:5000`

2. **Start the Frontend Development Server:**
   ```bash
   cd ../Frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`

3. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`

---

## � Default Login Credentials

For testing and development purposes, use these default accounts:

### Admin Account
- **Email:** admin@stride.com  
- **Password:** Admin1234  

### User Account
- **Email:** user@stride.com  
- **Password:** User1234  

> 💡 *These credentials are pre-configured in the database for quick access during development.*

---

## 📊 Project Status & Features

### ✅ **Total FEATURES**

#### 🔐 **Authentication System**
- ✅ User registration 
- ✅ JWT-based login system
- ✅ Role-based access control (User/Admin)
- ✅ Protected routes middleware
- ✅ Password hashing with bcrypt
- ✅ Session management with localStorage

#### 👤 **User Management**
- ✅ Comprehensive user profiles (name, email, phone, avatar)
- ✅ Fitness data tracking (weight, height, age, location)
- ✅ User preferences and notification settings
- ✅ Account status management (active, banned, etc.)
- ✅ Subscription plans (Free, Basic, Pro, Elite)

#### 🎯 **User Dashboard**
- ✅ User-Interface
- ❌ Active calories tracking with progress bars
- ❌ Heart rate monitoring with status indicators
- ❌ Recovery score calculations
- ❌ Daily activity summaries

#### 💪 **Training Module**
- ✅ User-interface
- ❌ Exercise library with categories (Strength, Cardio)
- ❌ Exercise search and filtering
- ❌ Workout planning interface
- ❌ Exercise addition/removal functionality

#### 🥗 **Nutrition & Meal Planning**
- ✅ User-interface
- ❌ Macronutrient monitoring (Protein, Carbs, Fats)
- ❌ Meal planning interface
- ❌ Nutrition progress visualization
- ❌ Dietary goal setting

#### 📈 **Progress Analytics**
- ✅ User-interface
- ❌ Time-based filtering (Week/Month/Year/All Time)
- ❌ Data export functionality
- ❌ Performance trend analysis
- ❌ Achievement tracking

#### 🔔 **Notifications System**
- ✅ User-interface
- ❌ Badge/achievement notifications
- ❌ Goal completion notifications
- ❌ Community interaction alerts
- ❌ Mark as read functionality

#### ⚙️ **Settings & Profile**
- ✅ User profile editing
- ✅ Password change functionality
- ✅ Notification preferences
- ✅ Account deletion
- ✅ Privacy settings

#### 🛡️ **Admin Panel**
- ✅ Admin dashboard with system metrics
- ✅ User management (view, edit, delete, ban)
- ✅ User search and filtering
- ✅ Role assignment and management
- ❌ System health monitoring
- ❌ Revenue and subscription tracking

#### 🎨 **Content Management (Admin)**
- ❌ Exercise content management
- ❌ Content categorization
- ❌ Media management
- ❌ Content approval workflow

#### 🎨 **Design & UI/UX**
- ✅ Fully responsive design (mobile/tablet/desktop)
- ✅ Dark theme with neon accent colors
- ✅ Material Symbols icon integration
- ✅ Smooth animations with Framer Motion
- ✅ Custom scrollbar styling
- ✅ Card-based layouts
- ✅ Professional typography (Inter font)

#### 🏗️ **Technical Architecture**
- 🔄 React 19 with modern hooks
- 🔄 Express.js backend with RESTful APIs
- 🔄 MongoDB with Mongoose ODM
- 🔄 JWT authentication system
- 🔄 Tailwind CSS with custom design system
- 🔄 React Router for navigation
- 🔄 Axios for API communication
- 🔄 Environment-based configuration

---

### 🚧 **IN DEVELOPMENT / PLANNED FEATURES**

#### 🔄 **Backend Enhancements**
- 🔄 User workout data persistence
- 🔄 Meal logging and tracking APIs
- 🔄 Progress data storage and analytics
- 🔄 File upload for avatars and media
- 🔄 Email notifications system
- 🔄 Password reset functionality

#### 📱 **Frontend Enhancements**
- 🔄 Real-time data synchronization
- 🔄 Advanced workout logging
- 🔄 Social features (following, sharing)
- 🔄 Integration with fitness wearables
- 🔄 Advanced analytics charts
- 🔄 Mobile app optimization

---

### 📈 **PROJECT METRICS**

- **Frontend Components**: 15+ React components
- **Backend Routes**: 6+ API endpoints
- **Database Models**: 1 user model with comprehensive schema
- **UI Pages**: 12+ pages (landing, auth, user panels, admin panels)
- **Technologies**: 15+ npm packages
- **Code Lines**: ~5000+ lines of code
- **Responsive Breakpoints**: Mobile, tablet, desktop support

---

### 🎯 **CURRENT PROJECT STATE**

**Status**: 🟡 **FUNCTIONAL MVP** - Core authentication and UI complete, ready for backend API integration

**Usability**: ✅ **HIGH** - Beautiful, responsive interface with smooth UX
**Security**: ✅ **SECURE** - JWT authentication, password hashing, role-based access
**Scalability**: 🟡 **MODERATE** - Well-structured codebase ready for expansion
**Performance**: ✅ **OPTIMIZED** - Fast loading, efficient rendering

---

### 🚀 **NEXT STEPS FOR DEVELOPMENT**

1. **Complete Backend APIs** for workout and meal data
2. **Implement File Upload** system for user avatars
3. **Add Real-time Features** with WebSocket integration
4. **Email Integration** for notifications and verification
5. **Advanced Analytics** with data visualization
6. **Mobile App Development** using React Native
7. **AI Integration** for smart recommendations
8. **Payment System** for subscription management

## �🔗 API Routes

### Backend Endpoints
- `POST /api/auth/signup` — User registration  
- `POST /api/auth/login` — User login  
- `GET /db-test` — Database connection test  

### Frontend Routes
| Path              | Component          | Description                  |
|-------------------|--------------------|------------------------------|
| `/`               | MainHome          | Landing page                 |
| `/login`          | Login             | User login                   |
| `/signup`         | Signup            | User registration            |
| `/dashboard`      | Dashboard         | User dashboard               |
| `/training`       | Training          | Workout tracking             |
| `/meal-planner`   | MealPlanner       | Meal planning                |
| `/progress`       | Progress          | Progress monitoring          |
| `/settings`       | Settings          | User settings                |
| `/admin/dashboard`| AdminDashboard    | Admin panel                  |
| `/admin/users`    | AdminUsers        | User management              |
| `/admin/settings` | AdminSettings     | Admin settings               |

---

## 📦 Dependencies

### Backend Dependencies
- `bcryptjs: ^3.0.3` — Password hashing  
- `cors: ^2.8.5` — Cross-origin resource sharing  
- `dotenv: ^17.2.3` — Environment variables  
- `express: ^5.2.1` — Web framework  
- `jsonwebtoken: ^9.0.3` — JWT authentication  
- `mongoose: ^9.1.4` — MongoDB ODM  

### Frontend Dependencies
- `@testing-library/dom: ^10.4.1` — DOM testing utilities  
- `@testing-library/jest-dom: ^6.9.1` — Jest DOM assertions  
- `@testing-library/react: ^16.3.1` — React testing utilities  
- `@testing-library/user-event: ^13.5.0` — User event simulation  
- `framer-motion: ^12.26.2` — Animation library  
- `react: ^19.2.3` — UI library  
- `react-dom: ^19.2.3` — React DOM rendering  
- `react-router-dom: ^6.30.3` — Routing  
- `react-scripts: 5.0.1` — CRA scripts  
- `web-vitals: ^2.1.4` — Performance metrics  

### Frontend DevDependencies
- `@tailwindcss/container-queries: ^0.1.1` — Tailwind container queries  
- `@tailwindcss/forms: ^0.5.11` — Tailwind form styles  
- `autoprefixer: ^10.4.23` — CSS autoprefixing  
- `postcss: ^8.5.6` — CSS processing  
- `tailwindcss: ^3.4.14` — Utility-first CSS  

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.
