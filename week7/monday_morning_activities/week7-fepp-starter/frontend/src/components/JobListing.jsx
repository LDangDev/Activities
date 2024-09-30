import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  return (
    <div className="job-preview">
      <Link to={`/jobs/${job.id}`}>
        <h2>{job.title}</h2>
        <p>Type: {job.type}</p>
        <p>Description: {job.description}</p>
        <p>Company: {job.company.name}</p>
      </Link>
    </div>
  );
};

export default JobListing;
