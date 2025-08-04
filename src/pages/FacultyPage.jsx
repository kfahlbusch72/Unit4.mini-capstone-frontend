import { useEffect, useState } from "react";
import { getAllFaculty } from "../api/faculty";
import FacultyList from "../components/FacultyList";

export default function FacultyPage() {
  const [facultyList, setFacultyList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadFaculty() {
      try {
        const data = await getAllFaculty();
        setFacultyList(data);
      } catch (err) {
        setError(err.message || "Failed to load faculty");
      }
    }

    loadFaculty();
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Our Faculty</h2>
      <FacultyList faculty={facultyList} />
    </div>
  );
}
