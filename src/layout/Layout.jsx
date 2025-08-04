import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav style={{ padding: "1rem", backgroundColor: "#222" }}>
        <NavLink
          to="/home"
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
        <NavLink
          to="/departments/new"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          New Department
        </NavLink>
        <NavLink
          to="/faculty"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Faculty
        </NavLink>
        <NavLink
          to="/faculty/new"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Add Faculty
        </NavLink>
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
