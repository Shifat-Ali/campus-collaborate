import React from 'react'
import JobListing from '../components/work'
import PermanentDrawerLeft from '../components/Leftbar';
import RightPart from '../components/RightPartExplore';

function WorkOpp() {
  const currentUser = "User1";
  return (
    <div style={{ display: 'flex' ,background:'#FAFAFA',minHeight: '100vh' }}>
      <div>
        <PermanentDrawerLeft />
      </div>
      <div style={{ flex: '1' ,margin:'20px'}}> {/* Use flex: '1' to make this div expand */}
      <div style={{ marginBottom: '20px' }}>Hello, {currentUser}</div>
      <div style={{background: 'white', borderRadius: '16px',padding:'20px'}} >
        <JobListing/>
        </div>
      </div>
      <div>
      <RightPart/>
      </div>
    </div>
  );
}

export default WorkOpp