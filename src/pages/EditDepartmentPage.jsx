import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { fetchDepartmentById, updateDepartment } from "../api/departments"; // Uncomment when backend is ready

export default function EditDepartmentPage() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [bannerImg, setBannerImg] = useState("");

  // For now, we’ll simulate fetching existing department data:
  useEffect(() => {
    // Simulate API fetch by ID
    const dummyDepartment = {
      id,
      name: "Mutant Training",
      description: "A rigorous program designed to help mutants master their abilities.",
      contactInfo: "professorx@xavierschool.edu",
      bannerImg: "https://via.placeholder.com/600x200?text=Mutant+Training",
    };

    setName(dummyDepartment.name);
    setDescription(dummyDepartment.description);
    setContactInfo(dummyDepartment.contactInfo);
    setBannerImg(dummyDepartment.bannerImg);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedDepartment = { name, description, contactInfo, bannerImg };

    console.log("Updated Department:", updatedDepartment);

    // Uncomment when backend is ready:
    // await updateDepartment(id, updatedDepartment);
  };

  return (
    <div>
      <h1>Edit Department</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label><br />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Contact Info:</label><br />
          <input value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} required />
        </div>
        <div>
          <label>Banner Image URL:</label><br />
          <input value={bannerImg} onChange={(e) => setBannerImg(e.target.value)} required />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
