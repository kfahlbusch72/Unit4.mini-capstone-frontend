import { Link } from "react-router-dom";

export default function FacultyCard({ faculty }) {
  return (
    <div className="faculty-card">
      <img src={faculty.imageUrl} alt={faculty.name} width={100} />
      <h3>{faculty.name}</h3>
      <p>{faculty.email}</p>
      <Link to={`/faculty/${faculty.id}`}>View Profile</Link>
    </div>
  );
}
