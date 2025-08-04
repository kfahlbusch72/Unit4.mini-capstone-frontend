import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
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
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/departments/new" element={<NewDepartmentPage />} />
        <Route path="/departments/:id" element={<DepartmentDetailsPage />} />
        <Route path="/departments/:id/edit" element={<EditDepartmentPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/faculty/new" element={<FacultyFormPage />} />
        <Route path="/faculty/:id" element={<FacultyDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
