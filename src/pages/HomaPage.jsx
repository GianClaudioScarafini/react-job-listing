import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobLIstings';  
import ViewAllJobs from '../components/ViewAllJobs';



const HomaPage = () => {
    return (
        <div>
            <Hero />
            <HomeCards />
            <JobListings />
            <ViewAllJobs />
        </div>
    )
}

export default HomaPage