import React, { useEffect, useState } from 'react';
import JobCard from '../JobCard/JobCard';
import './JobCards.css';

const JobCards = () => {

    const [jobsList, setJobsList] = useState([]);

    useEffect(()=>{
        fetch("https://intern-fe-assign-backend.herokuapp.com/jobs")
        .then(res=>res.json())
        .then(data=>setJobsList(data))
    },[])

    console.log(jobsList);
    

    return (
        <div className='job-cards' >
            {
                jobsList.map(jobCard => <JobCard jobCard={jobCard}></JobCard>)
            }
        </div>
    );
};

export default JobCards;