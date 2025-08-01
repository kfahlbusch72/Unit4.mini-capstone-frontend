import { useState } from "react";

export default function NewDepartmentPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [bannerImg, setBannerImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDepartment = {
      name,
      description,
      contactInfo,
      bannerImg,
    };

    console.log("Submitted Department:", newDepartment);

    // Later, you'll POST this data to the backend here.
    // For now, just reset form:
    setName("");
    setDescription("");
    setContactInfo("");
    setBannerImg("");
  };

  return (
    <div>
      <h1>Create New Department</h1>
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
        <button type="submit">Add Department</button>
      </form>
    </div>
  );
}
