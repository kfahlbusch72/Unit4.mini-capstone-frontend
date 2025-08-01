import { useState, useEffect } from "react";
import DepartmentList from "../components/DepartmentList";

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState([]);

  // Temporary Dummy Data
  useEffect(() => {
    setDepartments([
      { id: 1, name: "Mutant Training" },
      { id: 2, name: "Cerebro Research" },
      { id: 3, name: "Danger Room Operations" },
    ]);
  }, []);

  return (
    <div>
      <h1>Departments Page</h1>
      <DepartmentList departments={departments} />
    </div>
  );
}
