import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDepartmentById, updateDepartment } from "../api/departments";
import { useAuth } from "../context/AuthContext";

export default function EditDepartmentPage() {
  const { id } = useParams();
  const { token } = useAuth();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [images, setImages] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDepartment() {
      try {
        const data = await getDepartmentById(id);
        setName(data.name || "");
        setDescription(data.description || "");
        setEmail(data.email || "");
        setPhone(data.phone || "");
        setImages(data.images || "");
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load department.");
        setLoading(false);
      }
    }

    loadDepartment();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedDepartment = {
        name,
        description,
        email,
        phone,
        images,
      };

      await updateDepartment(id, updatedDepartment, token);
      alert("Department updated!");
    } catch (err) {
      console.error(err);
      alert("Failed to update department.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Edit Department</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            value={name ?? ""}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <br />
          <textarea
            value={description ?? ""}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <br />
          <input
            value={email ?? ""}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <br />
          <input
            value={phone ?? ""}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Banner Image URL:</label>
          <br />
          <input
            value={images ?? ""}
            onChange={(e) => setImages(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
