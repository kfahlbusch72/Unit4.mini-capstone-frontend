import { useState, useEffect } from "react";
import DepartmentList from "../components/DepartmentList";
import { getAllDepartments } from "../api/departments";

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDepartments() {
      try {
        const data = await getAllDepartments();
        setDepartments(data);
      } catch (err) {
        setError(err.message);
      }
    }

    loadDepartments();
  }, []);

  function handleDelete(id) {
    setDepartments((prev) => prev.filter((d) => d.id !== id));
  }

  return (
    <div>
      <h1>Departments Page</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <DepartmentList departments={departments} onDelete={handleDelete} />
    </div>
  );
}
