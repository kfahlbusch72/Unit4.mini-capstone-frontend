import { useAuth } from "../context/AuthContext";
import { deleteDepartment } from "../api/departments";
import { useNavigate } from "react-router-dom";

export default function DepartmentList({ departments, onDelete }) {
  const { token } = useAuth();
  const navigate = useNavigate();

  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this department?")) return;
    try {
      await deleteDepartment(id, token);
      onDelete(id);
    } catch (err) {
      alert("Error deleting department: " + err.message);
    }
  }

  return (
    <div>
      <h2>Department List</h2>
      <ul>
        {departments.map((dept) => (
          <li key={dept.id}>
            {dept.name}
            {token && (
              <>
                {" "}
                <button
                  onClick={() => navigate(`/departments/${dept.id}/edit`)}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(dept.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
