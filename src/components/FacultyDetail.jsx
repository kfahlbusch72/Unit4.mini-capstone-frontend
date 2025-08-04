import { Link, useNavigate } from "react-router-dom";
import { deleteFaculty } from "../api/faculty";

export default function FacultyDetail({ faculty }) {
  const navigate = useNavigate();

  if (!faculty) return <p>Loading...</p>;

  async function handleDelete() {
    const confirmDelete = confirm(
      "Are you sure you want to delete this faculty?"
    );
    if (!confirmDelete) return;

    try {
      await deleteFaculty(faculty.id);
      navigate("/faculty");
    } catch (err) {
      alert("Failed to delete faculty.");
    }
  }

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
        <strong>Email:</strong> {faculty.email || "N/A"}
      </p>
      <p>
        <strong>Department:</strong> {faculty.department?.name || "N/A"}
      </p>
      <p>
        <strong>Bio:</strong> {faculty.bio || "N/A"}
      </p>

      <div style={{ marginTop: "1rem" }}>
        <Link to="/faculty">
          <button>← Back to Faculty</button>
        </Link>
        <button
          style={{
            marginLeft: "1rem",
            backgroundColor: "var(--xm-energy-red)",
          }}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
