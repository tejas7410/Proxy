# 😂 Full Stack Jokes App

A full-stack jokes application built with **React + Vite** on the frontend and **Express (Node.js)** on the backend. It fetches a list of jokes from an API and displays them in a clean, styled layout.

---

## 🧰 Tech Stack

<div align="center">
  
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />

</div>

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/jokes-app.git
cd jokes-app
```

### 2️⃣ Setup Backend (Express)

```bash
cd backend
npm install
node index.js
```

The backend will run at: http://localhost:3000

### 3️⃣ Setup Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

The frontend will run at: http://localhost:5173

### 🔁 Connect Frontend to Backend

Add this to your vite.config.js in the frontend root to avoid CORS issues:

```js
// vite.config.js
export default {
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
};
```
