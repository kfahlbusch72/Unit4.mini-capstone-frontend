import { useParams } from "react-router-dom";

const dummyFaculty = [
  {
    id: 1,
    name: "Dr. Ada Lovelace",
    email: "ada@fsu.edu",
    bio: "Pioneer in computer science.",
    imageUrl: "https://placekitten.com/100/100",
    department: "Computer Science",
  },
  {
    id: 2,
    name: "Prof. Alan Turing",
    email: "alan@fsu.edu",
    bio: "Mathematician and codebreaker.",
    imageUrl: "https://placekitten.com/101/101",
    department: "Mathematics",
  },
];

export default function FacultyDetailPage() {
  const { id } = useParams();
  const faculty = dummyFaculty.find((f) => f.id === Number(id));

  if (!faculty) {
    return <h2>Faculty member not found</h2>;
  }

  return (
    <div className="faculty-detail">
      <h2>{faculty.name}</h2>
      <img src={faculty.imageUrl} alt={faculty.name} width={150} />
      <p>
        <strong>Email:</strong> {faculty.email}
      </p>
      <p>
        <strong>Department:</strong> {faculty.department}
      </p>
      <p>
        <strong>Bio:</strong> {faculty.bio}
      </p>
    </div>
  );
}
