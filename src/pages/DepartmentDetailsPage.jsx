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
      <img src={department.bannerImg} alt={department.name} width="600" />
      <p>{department.description}</p>
      <p>Contact: {department.contactInfo}</p>

      <h3>Faculty</h3>
      <ul>
        {department.faculty?.length ? (
          department.faculty.map((prof) => <li key={prof.id}>{prof.name}</li>)
        ) : (
          <li>No faculty assigned</li>
        )}
      </ul>
    </div>
  );
}
