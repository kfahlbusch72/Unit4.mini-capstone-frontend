// src/pages/FacultyFormPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FacultyForm from "../components/FacultyForm";
import { createFaculty } from "../api/faculty";
import { getAllDepartments } from "../api/departments"; // ✅ import
import { useAuth } from "../context/AuthContext"; // ✅

export default function FacultyFormPage() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    async function loadDepartments() {
      try {
        const data = await getAllDepartments();
        setDepartments(data);
      } catch (err) {
        console.error("Failed to fetch departments:", err.message);
      }
    }

    loadDepartments();
  }, []);

  async function handleSubmit(data) {
    try {
      await createFaculty(data, token);
      navigate("/faculty");
    } catch (err) {
      console.error("Failed to create faculty:", err.message);
      alert("Error creating faculty: " + err.message);
    }
  }

  return (
    <div>
      <h1>Add New Faculty</h1>
      <FacultyForm onSubmit={handleSubmit} departments={departments} />
    </div>
  );
}
