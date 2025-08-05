// src/pages/FacultyDetailPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFacultyById } from "../api/faculty";
import FacultyDetail from "../components/FacultyDetail";

export default function FacultyDetailPage() {
  const { id } = useParams();
  const [faculty, setFaculty] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadFaculty() {
      try {
        const data = await getFacultyById(id);
        setFaculty(data);
      } catch (err) {
        console.error("Failed to fetch faculty:", err.message);
        setError("Faculty not found");
      }
    }

    loadFaculty();
  }, [id]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!faculty) return <p>Loading...</p>;

  return <FacultyDetail faculty={faculty} />;
}
