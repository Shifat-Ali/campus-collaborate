import React, { useState, useEffect } from 'react';
import './work.css';
import PersonOutline from '@mui/icons-material/PersonOutline';

function JobListing() {
  // State to store the list of opportunities
  const [opportunities, setOpportunities] = useState([]);

  // useEffect to fetch opportunities from backend when component mounts
  useEffect(() => {
    // Simulating fetching data from backend
    // Replace this with actual fetch call to your backend
    const fetchData = async () => {
      // Example data
      const data = [
        { id: 1, name: 'Opportunity 1', designation: 'Design Volunteer', description: 'Description of opportunity 1', expiry: '2 days' },
        { id: 2, name: 'Opportunity 2', designation: 'Developer Volunteer', description: 'Description of opportunity 2', expiry: '3 days' },
        { id: 3, name: 'Opportunity 3', designation: 'Marketing Volunteer', description: 'Description of opportunity 3', expiry: '5 days' }
      ];
      setOpportunities(data);
    };

    fetchData();
  }, []);

  return (
    <div className='main'>
      <div className="job-listing">
        <div className='addopp'>
          <div>Browse Work Opportunities</div>
          <div>
            <button className='btn1'>
              + Add
            </button>
          </div>
        </div>

        {/* Mapping through opportunities to create a div for each opportunity */}
        {opportunities.map((opportunity) => (
          <div className='apply' key={opportunity.id}>
            <div className='about'>
              <div>
                <PersonOutline/>
              </div>
              <div className='name'>
                <h2>{opportunity.name}</h2>
                <div className='designation'>{opportunity.designation}</div>
              </div>
            </div>
            <div className='description'>
              {opportunity.description}
            </div>
            <div className='applybtn'>
              <div>
                Expiring in <br /><h1>{opportunity.expiry}</h1>
              </div>
              <div>
                <button className='btn2'>Apply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListing;
