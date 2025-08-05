import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDepartmentById } from "../api/departments";

export default function DepartmentDetailsPage() {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDepartment() {
      try {
        const data = await getDepartmentById(id);
        setDepartment(data);
      } catch (err) {
        console.error(err);
        setError("Department not found");
      }
    }

    loadDepartment();
  }, [id]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!department) return <p>Loading...</p>;

  return (
    <div>
      <h1>{department.name}</h1>

      {department.images && (
        <img src={department.images} alt={department.name} width="600" />
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
            </li>
          ))}
        </ul>
      ) : (
        <p>No faculty assigned</p>
      )}
    </div>
  );
}
