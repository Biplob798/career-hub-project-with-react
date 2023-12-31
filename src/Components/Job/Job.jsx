import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card bg-blue-100 text-black shadow-xl p-8">
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-4 py-2 font-extrabold border rounded border-[#7e90ef] mr-5 text-[#7e90ef]">
            {remote_or_onsite}
          </button>
          <button className="px-4 py-2 font-extrabold border rounded border-[#7e90ef] mr-5 text-[#7e90ef]">
            {job_type}
          </button>
        </div>
        <div>
          <div className="my-4">
            <h2 className="flex">
              <CiLocationOn className="text-2xl mr-2"> </CiLocationOn>
              {location}
            </h2>
          </div>
          <div>
            <h2 className="flex">
              <AiOutlineDollarCircle className="text-2xl mr-2"></AiOutlineDollarCircle>{" "}
              {salary}
            </h2>
          </div>
        </div>
        <div className="card-actions justify-">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
