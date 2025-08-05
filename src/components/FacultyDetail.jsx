import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteFaculty, changeFacultyDepartment } from "../api/faculty";
import { getAllDepartments } from "../api/departments";
import { useAuth } from "../context/AuthContext";

export default function FacultyDetail({ faculty }) {
  const navigate = useNavigate();
  const { token } = useAuth();

  const [departments, setDepartments] = useState([]);
  const [selectedDept, setSelectedDept] = useState(
    faculty?.department?.id ?? ""
  );

  useEffect(() => {
    async function loadDepartments() {
      try {
        const data = await getAllDepartments();
        setDepartments(data);
      } catch (err) {
        console.error("Failed to load departments", err);
      }
    }

    loadDepartments();
  }, []);

  async function handleDelete() {
    const confirmDelete = confirm(
      "Are you sure you want to delete this faculty?"
    );
    if (!confirmDelete) return;

    try {
      await deleteFaculty(faculty.id, token);
      navigate("/faculty");
    } catch (err) {
      alert("Failed to delete faculty.");
    }
  }

  async function handleUpdateDepartment() {
    if (!selectedDept) {
      alert("Please select a department.");
      return;
    }

    try {
      console.log("Changing to department ID:", selectedDept);
      await changeFacultyDepartment(faculty.id, selectedDept, token);
      alert("Department updated!");
      navigate(0); // Refresh page
    } catch (err) {
      console.error(err);
      alert("Failed to update department.");
    }
  }

  if (!faculty) return <p>Loading...</p>;

  return (
    <div className="faculty-detail">
      <h2>{faculty.name}</h2>
      {faculty.image_url && (
        <img
          src={faculty.image_url}
          alt={`Portrait of ${faculty.name}`}
          width={150}
        />
      )}

      <p>
        <strong>Department:</strong>{" "}
        {faculty.department?.name || "Not assigned"}
      </p>

      <p>
        <strong>Bio:</strong> {faculty.bioDescription || "N/A"}
      </p>

      {token && (
        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="department-select">
            <strong>Change Department:</strong>
          </label>
          <br />
          <select
            id="department-select"
            value={selectedDept}
            onChange={(e) => {
              const value = e.target.value;
              setSelectedDept(value === "" ? "" : Number(value)); // ✅ FIX 2: always convert to number unless empty
            }}
          >
            <option value="">-- Select Department --</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>

          <button
            onClick={handleUpdateDepartment}
            style={{
              marginLeft: "1rem",
              backgroundColor: "var(--xm-blue)",
            }}
          >
            Update Department
          </button>
        </div>
      )}

      <div style={{ marginTop: "2rem" }}>
        <Link to="/faculty">
          <button>← Back to Faculty</button>
        </Link>

        {token && (
          <button
            style={{
              marginLeft: "1rem",
              backgroundColor: "var(--xm-energy-red)",
            }}
            onClick={handleDelete}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
