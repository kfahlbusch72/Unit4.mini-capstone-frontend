import { useState } from "react";

export default function FacultyForm({ initialData = {}, departments = [], onSubmit }) {
  const [name, setName] = useState(initialData.name || "");
  const [email, setEmail] = useState(initialData.email || "");
  const [bio, setBio] = useState(initialData.bio || "");
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || "");
  const [departmentId, setDepartmentId] = useState(initialData.departmentId || "");

  function handleSubmit(e) {
    e.preventDefault();

    const newFaculty = {
      name,
      email,
      bio,
      imageUrl,
      departmentId: departmentId || null,
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
      />

      <textarea
        placeholder="Short bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        rows={4}
      />

      <input
        type="text"
        placeholder="Image URL (optional)"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <label>Department:</label>
      <select value={departmentId} onChange={(e) => setDepartmentId(e.target.value)}>
        <option value="">-- None --</option>
        {departments.map((dept) => (
          <option key={dept.id} value={dept.id}>
            {dept.name}
          </option>
        ))}
      </select>

      <button type="submit">{initialData.id ? "Update" : "Create"}</button>
    </form>
  );
}
