import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useField from "../hooks/useField";

const AddJobPage = () => {
  const jobTitle = useField("text");
  const [type, setType] = useState("Full-Time");
  const jobDescription = useField("text");
  const companyName = useField("text");
  const companyEmail = useField("text");
  const companyPhone = useField("text");

  const navigate = useNavigate();

  const addJob = async (newJob) => {
    try {
      const res = await fetch("api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      });
      if (!res.ok) {
        throw new Error("Fail to add job");
      }
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submitForm called");

    const newJob = {
      title: jobTitle.value,
      type,
      description: jobDescription.value,
      company: {
        name: companyName.value,
        contactEmail: companyEmail.value,
        contactPhone: companyPhone.value,
      },
    };
    console.log(newJob);
    addJob(newJob);
    navigate("/");

  };

  return (
    <div className="create">
      <h2>Add a New Job</h2>
      <form onSubmit={submitForm}>
        <label>Job title:</label>
        <input {...jobTitle} />
        <label>Job type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Remote">Remote</option>
          <option value="Internship">Internship</option>
        </select>

        <label>Job Description:</label>
        <textarea {...jobDescription}></textarea>
        <label>Company Name:</label>
        <input {...companyName} />
        <label>Contact Email:</label>
        <input {...companyEmail} />
        <label>Contact Phone:</label>
        <input {...companyPhone} />
        <button>Add Job</button>
      </form>
    </div>
  );
};

export default AddJobPage;
