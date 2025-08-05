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

export async function removeFacultyFromDepartment(
  departmentId,
  facultyId,
  token
) {
  const res = await fetch(
    `${API_BASE}/departments/${departmentId}/faculty/${facultyId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || "Failed to remove faculty from department");
  }

  return res.json();
}

export async function changeFacultyDepartment(facultyId, deptId, token) {
  const res = await fetch(`${API_BASE}/faculty/${facultyId}/department`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ departmentId: Number(deptId) }),
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || "Failed to change department");
  }

  return res.json();
}
