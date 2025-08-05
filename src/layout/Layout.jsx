import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ import useAuth

export default function Layout() {
  const { token } = useAuth(); // ✅ get token

  return (
    <>
      <nav style={{ padding: "1rem", backgroundColor: "#222" }}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/departments"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Departments
        </NavLink>

        {token && (
          <NavLink
            to="/departments/new"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            New Department
          </NavLink>
        )}

        <NavLink
          to="/faculty"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Faculty
        </NavLink>

        {token && (
          <NavLink
            to="/faculty/new"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Add Faculty
          </NavLink>
        )}

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Admin Login
        </NavLink>
      </nav>

      <main style={{ padding: "2rem" }}>
        <Outlet />
      </main>
    </>
  );
}
