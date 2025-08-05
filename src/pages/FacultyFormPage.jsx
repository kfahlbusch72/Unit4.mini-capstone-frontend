// src/pages/FacultyFormPage.jsx
import { useNavigate } from "react-router-dom";
import FacultyForm from "../components/FacultyForm";
import { createFaculty } from "../api/faculty";
import { useAuth } from "../context/AuthContext"; // ✅ import useAuth

export default function FacultyFormPage() {
  const navigate = useNavigate();
  const { token } = useAuth(); // ✅ get token from context

  async function handleSubmit(data) {
    try {
      await createFaculty(data, token); // ✅ pass token to API
      navigate("/faculty");
    } catch (err) {
      console.error("Failed to create faculty:", err.message);
      alert("Error creating faculty: " + err.message);
    }
  }

  return (
    <div>
      <FacultyForm onSubmit={handleSubmit} />
    </div>
  );
}
