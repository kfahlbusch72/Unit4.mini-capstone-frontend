import { useNavigate } from "react-router-dom";
import FacultyForm from "../components/FacultyForm";
import { createFaculty } from "../api/faculty";

export default function FacultyFormPage() {
  const navigate = useNavigate();

  async function handleSubmit(data) {
    try {
      await createFaculty(data);
      navigate("/faculty"); // Redirect after successful creation
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
