import { useEffect, useState } from "react";
import FacultyCard from "../components/FacultyCard";
import { getAllFaculty } from "../api/faculty";

export default function FacultyPage() {
  const [facultyList, setFacultyList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadFaculty() {
      try {
        const data = await getAllFaculty(); // 🔌 call backend
        setFacultyList(data);
      } catch (err) {
        setError(err.message || "Failed to load faculty");
      }
    }

    loadFaculty();
  }, []);

  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>Our Faculty</h2>
      <div className="faculty-list">
        {facultyList.map((prof) => (
          <FacultyCard key={prof.id} faculty={prof} />
        ))}
      </div>
    </div>
  );
}
