import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { login as loginUser, register as registerUser } from "../api/auth"; // ✅
import { useNavigate } from "react-router-dom";

export default function AdminAuthForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      let data;

      if (mode === "login") {
        data = await loginUser(email, password); // ✅ real API call
      } else {
        data = await registerUser(email, password); // ✅ real API call
      }

      login(data.token); // ✅ store real token
      navigate("/"); // ✅ redirect to homepage (optional)
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{mode === "login" ? "Login" : "Register"}</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">{mode === "login" ? "Login" : "Register"}</button>

      <p>
        {mode === "login" ? "New here?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={() => setMode(mode === "login" ? "register" : "login")}
        >
          {mode === "login" ? "Register" : "Login"}
        </button>
      </p>
    </form>
  );
}
