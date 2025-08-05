// src/api/departments.js
const API_BASE = "http://localhost:3000/api";

// Get all departments
export async function getAllDepartments() {
  const res = await fetch(`${API_BASE}/departments`);
  if (!res.ok) throw new Error("Failed to fetch departments");
  return res.json();
}

// Get a department by ID
export async function getDepartmentById(id) {
  const res = await fetch(`${API_BASE}/departments/${id}`);
  if (!res.ok) throw new Error("Failed to fetch department");
  return res.json();
}

// Create a new department
export async function createDepartment(data, token) {
  const res = await fetch(`${API_BASE}/departments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // from login
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create department");
  return res.json();
}

// Delete a department by ID
export async function deleteDepartment(id, token) {
  const res = await fetch(`${API_BASE}/departments/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || "Failed to delete department");
  }
}
