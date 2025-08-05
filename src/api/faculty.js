const API_BASE = "http://localhost:3000/api";

// Get all faculty
export async function getAllFaculty() {
  const res = await fetch(`${API_BASE}/faculty`);
  if (!res.ok) throw new Error("Failed to fetch faculty");
  return res.json();
}

// Get one faculty member by ID
export async function getFacultyById(id) {
  const res = await fetch(`${API_BASE}/faculty/${id}`);
  if (!res.ok) throw new Error("Failed to fetch faculty member");
  return res.json();
}

// Create a new faculty member
export async function createFaculty(faculty, token) {
  const res = await fetch(`${API_BASE}/faculty`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // ✅ add token header
    },
    body: JSON.stringify(faculty),
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || "Failed to create faculty");
  }

  return res.json();
}

export async function deleteFaculty(id, token) {
  const res = await fetch(`http://localhost:3000/api/faculty/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to delete faculty");
}
