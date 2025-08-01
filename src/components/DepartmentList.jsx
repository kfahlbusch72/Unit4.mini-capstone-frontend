export default function DepartmentList({ departments }) {
  return (
    <div>
      <h2>Department List</h2>
      <ul>
        {departments.map((dept) => (
          <li key={dept.id}>
            {dept.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
