import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength,setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-5xl text-center"> Featured Jobs : {jobs.length}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa
          porro magni fugiat placeat laborum saepe voluptas temporibus obcaecati
          ea.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={ dataLength === jobs.length ? 'hidden' : ''}>
        <button onClick={ () => setDataLength(jobs.length)} className="btn btn-primary mt-6 w-full"> Show All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
