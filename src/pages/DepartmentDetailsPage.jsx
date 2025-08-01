import { useParams } from "react-router-dom";

export default function DepartmentDetailsPage() {
  const { id } = useParams();

  // Dummy Data for testing
  const dummyDepartment = {
    id,
    name: "Mutant Training",
    description: "A rigorous program designed to help mutants master their abilities.",
    contactInfo: "professorx@xavierschool.edu",
    bannerImg: "https://via.placeholder.com/600x200?text=Mutant+Training",
    faculty: [
      { id: 1, name: "Professor X" },
      { id: 2, name: "Cyclops" },
    ],
  };

  return (
    <div>
      <h1>{dummyDepartment.name}</h1>
      <img src={dummyDepartment.bannerImg} alt={dummyDepartment.name} width="600" />
      <p>{dummyDepartment.description}</p>
      <p>Contact: {dummyDepartment.contactInfo}</p>

      <h3>Faculty</h3>
      <ul>
        {dummyDepartment.faculty.map((prof) => (
          <li key={prof.id}>{prof.name}</li>
        ))}
      </ul>
    </div>
  );
}
