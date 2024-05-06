/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import React from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner'


const JobLIsting = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const res = await fetch('http://localhost:8000/jobs')
            try {
                const data = await res.json();
                setJobs(data);
                console.log(data);
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);


    return (
        <section class="bg-blue-50 px-4 py-10">
            <div class="container-xl lg:container m-auto">
                <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Featured Jobs' : 'All Jobs'}
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {loading ? (<Spinner loading={loading}/>) : (
                        <>
                            {jobs.map((job) => (
                                <JobListing key={job.id} job={job} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default JobLIsting