import React, { useState } from "react";
import "./index.css";
import useFetchJobs from "./components/useFetchJobs";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Job from "./components/home/Job";
import JobsPagination from "./components/Layout/JobsPagination";
import SearchForm from "./components/home/SearchForm";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <div>
      <Header />
      <div>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error.. Try Refreshing</h1>}
        <div className="job_listing_area">
          <div className="container mt-4">
            <SearchForm params={params} onParamChange={handleParamChange} />
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section_title mb-5 mt-5">
                  <h3>Job Listing</h3>
                </div>
              </div>
              <div className="row align-items-right col-lg-6">
                <div className="brouse_job text-right ml-auto">
                  <JobsPagination
                    page={page}
                    setPage={setPage}
                    hasNextPage={hasNextPage}
                  />
                </div>
              </div>
            </div>
            {jobs.map((job) => {
              return <Job key={job.id} job={job} />;
            })}
          </div>
        </div>
      </div>
      <div className="row align-items-right col-lg-6">
        <div className="brouse_job text-right ml-auto">
          <JobsPagination
            page={page}
            setPage={setPage}
            hasNextPage={hasNextPage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
