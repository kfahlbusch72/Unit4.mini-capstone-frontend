export default function FacultyDetail({ faculty }) {
  if (!faculty) return <p>Loading...</p>;

  return (
    <div className="faculty-detail">
      <h2>{faculty.name}</h2>
      <img
        src={faculty.imageUrl}
        alt={`Portrait of ${faculty.name}`}
        width={150}
      />
      <p>
        <strong>Email:</strong> {faculty.email}
      </p>
      <p>
        <strong>Department:</strong> {faculty.department?.name || "N/A"}
      </p>
      <p>
        <strong>Bio:</strong> {faculty.bio}
      </p>
    </div>
  );
}
