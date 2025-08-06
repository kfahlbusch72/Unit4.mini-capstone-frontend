// src/components/FacultyCard.jsx
import { Link } from "react-router-dom";

export default function FacultyCard({ faculty }) {
  return (
    <div className="faculty-card">
      {faculty.bioImage && (
        <img
          src={faculty.bioImage} // ✅ USE DIRECTLY
          alt={`Portrait of ${faculty.name}`}
          width={100}
          style={{
            objectFit: "cover",
            height: "100px",
            borderRadius: "8px",
            marginBottom: "0.5rem",
          }}
        />
      )}
      <h3>{faculty.name}</h3>
      <Link to={`/faculty/${faculty.id}`}>View Profile</Link>
    </div>
  );
}
