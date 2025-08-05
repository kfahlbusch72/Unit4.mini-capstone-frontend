import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { createDepartment } from "../api/departments";

export default function NewDepartmentPage() {
  const { token } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [bannerImg, setBannerImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDepartment = {
      name,
      description,
      contactInfo,
      bannerImg,
    };

    try {
      await createDepartment(newDepartment, token);
      navigate("/departments");
    } catch (err) {
      console.error("Failed to create department:", err.message);
      alert("Error: " + err.message);
    }
  };

  return (
    <div>
      <h1>Create New Department</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contact Info:</label>
          <br />
          <input
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Banner Image URL:</label>
          <br />
          <input
            value={bannerImg}
            onChange={(e) => setBannerImg(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Department</button>
      </form>
    </div>
  );
}
