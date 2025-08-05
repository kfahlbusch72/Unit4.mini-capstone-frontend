import { useState } from "react";

export default function FacultyForm({
  initialData = {},
  departments = [],
  onSubmit,
}) {
  const [name, setName] = useState(initialData.name || "");
  const [bioDescription, setBioDescription] = useState(
    initialData.bioDescription || ""
  );
  const [bioImage, setBioImage] = useState(initialData.bioImage || "");
  const [departmentId, setDepartmentId] = useState(
    initialData.departmentId || ""
  );

  function handleSubmit(e) {
    e.preventDefault();

    const newFaculty = {
      name,
      bioDescription,
      bioImage,
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

      <textarea
        placeholder="Short bio"
        value={bioDescription}
        onChange={(e) => setBioDescription(e.target.value)}
        rows={4}
        required
      />

      <input
        type="text"
        placeholder="Image URL"
        value={bioImage}
        onChange={(e) => setBioImage(e.target.value)}
        required
      />

      <label>Department:</label>
      <select
        value={departmentId}
        onChange={(e) => setDepartmentId(e.target.value)}
        required
      >
        <option value="">-- Select Department --</option>
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
