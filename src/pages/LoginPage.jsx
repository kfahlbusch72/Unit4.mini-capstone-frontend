import AdminAuthForm from "../components/AdminAuthForm";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { token, logout } = useAuth();

  return (
    <div>
      {token ? (
        <>
          <h2>You are logged in!</h2>
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <AdminAuthForm />
      )}
    </div>
  );
}
