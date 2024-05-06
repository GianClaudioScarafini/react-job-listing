/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';

import React from 'react'

import JobListing from './JobListing'


const JobLIsting = ({isHome = false}) => {
    const [jobs, setJobs ] = useState([]);
    const [loding, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            
            try {
                const response = await fetch ('http:localhost:800/jobs');
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.log('error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }
    }, [])
    return (
        <section class="bg-blue-50 px-4 py-10">
            <div class="container-xl lg:container m-auto">
                <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Featured Jobs' : 'All Jobs'}
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {jobs.map((job) => (
                        <JobListing key={job.id} job={job}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default JobLIsting