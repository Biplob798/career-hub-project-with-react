import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job =>job.id === idInt);
    console.log( job )
    return (
        <div>
           
            <div className="grid gap-4 md:grid-cols-4 mt-6">
                <div className="border md:col-span-3 p-4">
                    <h2 className="text-4xl "></h2>                     Details Coming Here
                    <h2>Job Details of: {job.job_title}</h2>
                    <p>{job.company_name}</p>

                </div>
                <div className="border p-4 space-y-4">
                    <h2 className="text-3xl">Side Bar</h2>
                    <button className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;