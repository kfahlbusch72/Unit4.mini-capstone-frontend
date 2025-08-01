import { useParams } from "react-router-dom";

export default function FacultyDetailPage() {
  const { id } = useParams();
  return <h2>Faculty Detail for ID: {id}</h2>;
}
