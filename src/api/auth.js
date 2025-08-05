// src/api/auth.js
const API_BASE = "http://localhost:3000/api";

// Register a new admin
export async function register(username, password) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error("Failed to register");
  return res.json(); // should include token
}

// Log in an existing admin
export async function login(username, password) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error("Invalid email or password");
  return res.json(); // should include token
}
