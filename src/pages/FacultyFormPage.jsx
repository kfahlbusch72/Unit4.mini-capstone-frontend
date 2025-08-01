import FacultyForm from "../components/FacultyForm";

export default function FacultyFormPage() {
  function handleSubmit(data) {
    console.log("Submitted Faculty:", data);
  }

  return (
    <div>
      <FacultyForm onSubmit={handleSubmit} />
    </div>
  );
}
