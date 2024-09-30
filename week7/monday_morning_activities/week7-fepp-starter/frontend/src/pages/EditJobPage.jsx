import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditJobPage = () => {
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate(); // Import and use useNavigate

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");

  const updateJob = async (job) => {
    try {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });

      if (!res.ok) {
        throw new Error("Fail to update job");
      }
      return res.ok;
    } catch (err) {
      console.error("Error updating job: ", err);
      return false;
    }
  };

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setJob(data);

        // Initialize form fields
        setTitle(data.title);
        setType(data.type);
        setDescription(data.description);
        setCompanyName(data.company.name);
        setCompanyEmail(data.company.contactEmail);
        setCompanyPhone(data.company.contactPhone);
      } catch (err) {
        console.error("Failed to fetch job", err); // Corrected here
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  // Handle form submission
  const submitForm = async (e) => {
    e.preventDefault();

    const updatedJob = {
      id,
      title,
      type,
      description,
      company: {
        name: companyName,
        contactEmail: companyEmail, // Fixed here
        contactPhone: companyPhone,   // Fixed here
      },
    };

    const success = await updateJob(updatedJob);
    if (success) {
      // toast.success("Job Updated Successfully"); // Uncomment if using toast
      navigate(`/jobs/${id}`);
    } else {
      // toast.error("Failed to update the job"); // Uncomment if using toast
    }
  };

  return (
    <div className="create">
      <h2>Update Job</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <form onSubmit={submitForm}>
          <label>Job title:</label>
          <input
            type="text"
            required
            value={title} // Use title state here
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Job type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>

          <label>Job Description:</label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label>Company Name:</label>
          <input
            type="text"
            required
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <label>Contact Email:</label>
          <input
            type="email" // Consider using type email for validation
            required
            value={companyEmail} // Fixed here
            onChange={(e) => setCompanyEmail(e.target.value)} // Fixed here
          />
          <label>Contact Phone:</label>
          <input
            type="text"
            required
            value={companyPhone} // Fixed here
            onChange={(e) => setCompanyPhone(e.target.value)} // Fixed here
          />
          <button type="submit">Update Job</button>
        </form>
      )}
    </div>
  );
};

export default EditJobPage;
