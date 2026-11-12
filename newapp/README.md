# newapp — Simple MongoDB App

A beginner-friendly Node.js + MongoDB project using **Mongoose**.

## 📁 Project Structure
```
newapp/
├── index.js       ← Main app file
├── package.json   ← Project config & dependencies
└── README.md      ← This file
```

## 🚀 Setup & Run

### 1. Install dependencies
```bash
npm install
```

### 2. Make sure MongoDB is running
```bash
net start MongoDB
```

### 3. Run the app
```bash
npm start
```

## 🗄️ What it does
- Connects to a local MongoDB database called **`newappDB`**
- Defines a **User** schema with `name`, `email`, `age`, `createdAt`
- Inserts 3 sample users
- Reads and prints all users from the database

