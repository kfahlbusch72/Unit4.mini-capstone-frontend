import FacultyCard from "./FacultyCard";

export default function FacultyList({ faculty }) {
  return (
    <div className="faculty-list">
      {faculty.map((prof) => (
        <FacultyCard key={prof.id} faculty={prof} />
      ))}
    </div>
  );
}
