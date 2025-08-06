import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDepartmentById } from "../api/departments";
import {
  getAllFaculty,
  changeFacultyDepartment,
  removeFacultyFromDepartment,
} from "../api/faculty";
import { useAuth } from "../context/AuthContext";

export default function DepartmentDetailsPage() {
  const { id } = useParams();
  const { token } = useAuth();

  const [department, setDepartment] = useState(null);
  const [error, setError] = useState("");
  const [allFaculty, setAllFaculty] = useState([]);
  const [selectedFacultyId, setSelectedFacultyId] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const dept = await getDepartmentById(id);
        setDepartment(dept);

        const facultyList = await getAllFaculty();
        setAllFaculty(facultyList);
      } catch (err) {
        console.error(err);
        setError("Department not found");
      }
    }

    loadData();
  }, [id]);

  async function handleAddFaculty() {
    if (!selectedFacultyId) return;
    try {
      await changeFacultyDepartment(selectedFacultyId, Number(id), token);
      alert("Faculty added to department!");
      const updated = await getDepartmentById(id);
      setDepartment(updated);
    } catch (err) {
      alert("Failed to add faculty.");
    }
  }

  async function handleRemoveFaculty(facultyId) {
    try {
      await removeFacultyFromDepartment(id, facultyId, token);
      alert("Faculty removed.");
      const updated = await getDepartmentById(id);
      setDepartment(updated);
    } catch (err) {
      alert("Failed to remove faculty.");
    }
  }

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!department) return <p>Loading...</p>;

  return (
    <div>
      <h1>{department.name}</h1>

      {/* ✅ FIXED: Prepend backend URL */}
      {department.images && (
        <img
          src={`http://localhost:3000${department.images}`}
          alt={department.name}
          width="600"
        />
      )}

      <p>{department.description}</p>
      <p>
        <strong>Email:</strong> {department.email}
      </p>
      <p>
        <strong>Phone:</strong> {department.phone}
      </p>

      <h3>Faculty</h3>
      {department.faculty?.length > 0 ? (
        <ul>
          {department.faculty.map((prof) => (
            <li key={prof.id} style={{ marginBottom: "1rem" }}>
              {prof.bioImage && (
                <img
                  src={prof.bioImage}
                  alt={prof.name}
                  width="100"
                  style={{ marginRight: "1rem" }}
                />
              )}
              <span>{prof.name}</span>
              {token && (
                <button
                  onClick={() => handleRemoveFaculty(prof.id)}
                  style={{ marginLeft: "1rem", color: "red" }}
                >
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No faculty assigned</p>
      )}

      {token && (
        <>
          <h4>Add Faculty to Department</h4>
          <select
            value={selectedFacultyId}
            onChange={(e) => setSelectedFacultyId(Number(e.target.value))}
          >
            <option value="">-- Select Faculty --</option>
            {allFaculty
              .filter((f) => !f.department || f.department.id !== Number(id))
              .map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name}
                </option>
              ))}
          </select>
          <button onClick={handleAddFaculty} style={{ marginLeft: "1rem" }}>
            Add
          </button>
        </>
      )}
    </div>
  );
}
