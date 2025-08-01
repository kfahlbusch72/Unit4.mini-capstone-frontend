import { Routes, Route } from "react-router-dom";
import FacultyPage from "./pages/FacultyPage";
import FacultyDetailPage from "./pages/FacultyDetailPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  return (
    <>
      <h1>Welcome to FSU</h1>
      <Routes>
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/faculty/:id" element={<FacultyDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
