import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { deleteFaculty, removeFacultyFromDepartment } from "../api/faculty";

export default function FacultyDetail({ faculty }) {
  const { token } = useAuth();
  const navigate = useNavigate();

  if (!faculty) return <p>Loading...</p>;

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this faculty member?"))
      return;

    try {
      await deleteFaculty(faculty.id, token);
      navigate("/faculty");
    } catch (err) {
      alert("Error deleting faculty: " + err.message);
    }
  }

  async function handleUnassign() {
    try {
      await removeFacultyFromDepartment(faculty.id, token);
      navigate(`/faculty/${faculty.id}`); // Reload page
    } catch (err) {
      alert("Error removing from department: " + err.message);
    }
  }

  return (
    <div>
      <h1>{faculty.name}</h1>
      <p>{faculty.email}</p>
      <p>{faculty.bio}</p>
      {faculty.imageUrl && (
        <img src={faculty.imageUrl} alt={faculty.name} width="300" />
      )}
      <p>Department: {faculty.department?.name || "Unassigned"}</p>

      {token && (
        <>
          {faculty.department && (
            <button onClick={handleUnassign}>Remove from Department</button>
          )}

          <button
            onClick={handleDelete}
            style={{ color: "red", marginLeft: "1rem" }}
          >
            Delete Faculty
          </button>
        </>
      )}
    </div>
  );
}
