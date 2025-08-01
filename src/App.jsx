import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentDetailsPage from "./pages/DepartmentDetailsPage";
import NewDepartmentPage from "./pages/NewDepartmentPage";
import EditDepartmentPage from "./pages/EditDepartmentPage";

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", backgroundColor: "#222", color: "#fff" }}>
        <Link to="/departments" style={{ marginRight: "1rem", color: "yellow" }}>Departments</Link>
        <Link to="/departments/new" style={{ marginRight: "1rem", color: "yellow" }}>New Department</Link>
        <Link to="/departments/1" style={{ marginRight: "1rem", color: "yellow" }}>Details (ID 1)</Link>
        <Link to="/departments/1/edit" style={{ color: "yellow" }}>Edit (ID 1)</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/departments" />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/departments/new" element={<NewDepartmentPage />} />
        <Route path="/departments/:id" element={<DepartmentDetailsPage />} />
        <Route path="/departments/:id/edit" element={<EditDepartmentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
