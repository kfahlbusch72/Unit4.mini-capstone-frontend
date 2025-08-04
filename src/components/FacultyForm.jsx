// src/components/FacultyForm.jsx
import { useState } from "react";

export default function FacultyForm({ initialData = {}, onSubmit }) {
  const [name, setName] = useState(initialData.name || "");
  const [email, setEmail] = useState(initialData.email || "");
  const [bio, setBio] = useState(initialData.bio || "");
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || "");
  const [department, setDepartment] = useState(initialData.department || "");

  function handleSubmit(e) {
    e.preventDefault();

    const newFaculty = {
      name,
      email,
      bio,
      imageUrl,
      department,
    };

    onSubmit(newFaculty);
  }

  return (
    <form onSubmit={handleSubmit} className="faculty-form">
      <h2>{initialData.id ? "Edit Faculty" : "Add New Faculty"}</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email (optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <textarea
        placeholder="Short bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        rows={4}
      />

      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <button type="submit">{initialData.id ? "Update" : "Create"}</button>
    </form>
  );
}
