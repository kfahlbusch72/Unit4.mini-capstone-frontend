import FacultyCard from "../components/FacultyCard";

const dummyFaculty = [
  {
    id: 1,
    name: "Dr. Ada Lovelace",
    email: "ada@fsu.edu",
    imageUrl: "https://placekitten.com/100/100",
  },
  {
    id: 2,
    name: "Prof. Alan Turing",
    email: "alan@fsu.edu",
    imageUrl: "https://placekitten.com/101/101",
  },
];

export default function FacultyPage() {
  return (
    <div>
      <h2>Our Faculty</h2>
      <div className="faculty-list">
        {dummyFaculty.map((prof) => (
          <FacultyCard key={prof.id} faculty={prof} />
        ))}
      </div>
    </div>
  );
}
