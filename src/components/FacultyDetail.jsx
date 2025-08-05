// src/components/FacultyDetail.jsx
import { Link, useNavigate } from "react-router-dom";
import { deleteFaculty } from "../api/faculty";
import { useAuth } from "../context/AuthContext";

export default function FacultyDetail({ faculty }) {
  const navigate = useNavigate();
  const { token } = useAuth();

  if (!faculty) return <p>Loading...</p>;

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

  return (
    <div className="faculty-detail">
      <h2>{faculty.name}</h2>

      {faculty.bioImage && (
        <img src={faculty.bioImage} alt={faculty.name} width={200} />
      )}

      <p>
        <strong>Department:</strong>{" "}
        {faculty.department?.name || "Not assigned"}
      </p>

      <p>
        <strong>Bio:</strong> {faculty.bioDescription || "N/A"}
      </p>

      <div style={{ marginTop: "1rem" }}>
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
