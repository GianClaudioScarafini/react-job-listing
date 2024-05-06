/* eslint-disable react/no-unknown-property */
import React from 'react'
import jobs from '../../jobs.json'
import JobListing from './JobListing'


const JobLIsting = ({isHome = false}) => {
    const jobListing = isHome ? jobs.slice(0, 3) : jobs;
    console.log(jobListing)
    return (
        <section class="bg-blue-50 px-4 py-10">
            <div class="container-xl lg:container m-auto">
                <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Featured Jobs' : 'All Jobs'}
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {jobListing.map((job) => (
                        <JobListing key={job.id} job={job}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default JobLIsting