# 🚀 StartupSphere - Startup Forum System

**StartupSphere** is a full-stack web application that allows startup founders to share their ideas, receive funding offers from investors, and manage interactions. This project promotes startup visibility and connects founders with potential investors in a structured way.

---

## 📌 Features

### 👩‍💼 For Founders
- Register and log in
- Create a startup profile
- Post startup ideas or updates
- View and respond to funding offers

### 💼 For Investors
- Register and log in
- Browse startup posts
- Send funding offers
- Track status of their offers

---

## ⚙️ Tech Stack

### 🔹 Frontend
- **React** with Vite
- **Tailwind CSS** for styling
- **Axios** for API communication

### 🔹 Backend
- **Node.js** + **Express.js**
- RESTful APIs
- **MySQL** database
- **dotenv** for environment configuration

---

## 🗃️ Database Schema

**Database:** `dbmsstartup`

### Tables:

- **Users**
  - `UserID` (PK), `Name`, `Email`, `Password`, `Role`
- **Startups**
  - `StartupID` (PK), `FounderID` (FK to Users), `Name`, `Description`, `Industry`, `FundingStage`
- **Posts**
  - `PostID` (PK), `StartupID` (FK), `Content`, `DatePosted`
- **Investors**
  - `InvestorID` (PK), `UserID` (FK), `InterestedIndustry`
- **FundingRequests**
  - `RequestID` (PK), `StartupID` (FK), `InvestorID` (FK), `AmountOffered`, `Status`, `DateRequested`

---

## 🧪 SQL Command to View Schema

To view all table schemas in your MySQL database:

```sql
USE dbmsstartup;

-- List all tables
SHOW TABLES;

-- View structure of a specific table
DESCRIBE users;
DESCRIBE startups;
DESCRIBE posts;
DESCRIBE investors;
DESCRIBE fundingrequests;

```
Backend Setup
# Step 1: Navigate to the backend directory
cd startup-forum-backend

# Step 2: Install dependencies
npm install

# Step 3: Create .env file and set environment variables
echo "DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=dbmsstartup
PORT=5000" > .env

# Step 4: Run backend server
node server.js

