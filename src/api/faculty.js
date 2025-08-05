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
  console.log("sending token:", token);
  const res = await fetch(`${API_BASE}/faculty/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || "Failed to delete faculty");
  }
}

export async function removeFacultyFromDepartment(id, token) {
  const res = await fetch(`${API_BASE}/faculty/${id}`, {
    method: "PATCH", // or PUT if backend expects that
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ departmentId: null }),
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || "Failed to unassign faculty");
  }

  return res.json();
}

export async function changeFacultyDepartment(facultyId, deptId, token) {
  const res = await fetch(`/api/faculty/${facultyId}/department`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ deptId }),
  });

  if (!res.ok) throw new Error("Failed to change department");
  return res.json();
}
