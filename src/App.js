import React, { useState } from 'react';
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import useFetchJobs from './components/useFetchJobs'
import Job from './components/home/Job'
import JobsPagination from './components/Layout/JobsPagination';
import SearchForm from './components/home/SearchForm';
//import { Container } from 'react-bootstrap'


function App() {
  const [params, setParams] = useState({})
  const  [page, setPage] = useState(1)
  const {jobs, loading, error, hasNextPage} = useFetchJobs(params, page)

function handleParamChange(e) {
  const param = e.target.name
  const value = e.target.value
  setPage(1)
  setParams(prevParams => {
    return { ...prevParams, [param]: value}
  })
}

  return (
    <div>
      <Header />
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
      <Footer />
    </div>
    
  );
}

export default App;
