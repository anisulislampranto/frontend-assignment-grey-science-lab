import React from 'react';
import './JobCard.css';

const JobCard = (props : any) => {
    const {companyImage, companyName, jobTitle, datePosted, isFullTime, country} = props.jobCard;

    return (
        <div className='job-card'>
            <img src={companyImage} alt="" />
            <p style={{color:'grey'}}>Date Posted: {datePosted}</p>
            {
                isFullTime ? <p><small>Full Time</small></p> : <p><small>Half Time</small></p>
            }
            <h2>{jobTitle}</h2>
            <p style={{color:'grey'}}><small>{companyName}</small></p>
            <p style={{color:'#5964DF'}}>{country}</p>
        </div>
    );
};

export default JobCard;