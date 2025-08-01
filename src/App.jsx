import { Routes, Route, Navigate, Link } from "react-router-dom";
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentDetailsPage from "./pages/DepartmentDetailsPage";
import NewDepartmentPage from "./pages/NewDepartmentPage";
import EditDepartmentPage from "./pages/EditDepartmentPage";
import FacultyPage from "./pages/FacultyPage";
import FacultyDetailPage from "./pages/FacultyDetailPage";
import FacultyFormPage from "./pages/FacultyFormPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <nav style={{ padding: "1rem", backgroundColor: "#222", color: "#fff" }}>
        <Link
          to="/departments"
          style={{ marginRight: "1rem", color: "yellow" }}
        >
          Departments
        </Link>
        <Link
          to="/departments/new"
          style={{ marginRight: "1rem", color: "yellow" }}
        >
          New Department
        </Link>
        <Link to="/faculty" style={{ marginRight: "1rem", color: "yellow" }}>
          Faculty
        </Link>
        <Link
          to="/faculty/new"
          style={{ marginRight: "1rem", color: "yellow" }}
        >
          Add Faculty
        </Link>
        <Link to="/login" style={{ color: "yellow" }}>
          Admin Login
        </Link>
      </nav>

      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Welcome to FSU</h1>

      <Routes>
        <Route path="/" element={<Navigate to="/departments" />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/departments/new" element={<NewDepartmentPage />} />
        <Route path="/departments/:id" element={<DepartmentDetailsPage />} />
        <Route path="/departments/:id/edit" element={<EditDepartmentPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/faculty/:id" element={<FacultyDetailPage />} />
        <Route path="/faculty/new" element={<FacultyFormPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
