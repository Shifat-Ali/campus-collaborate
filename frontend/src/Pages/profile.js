import React from 'react'
import ProfilePageMid from '../components/profilepagecarousel'
import PermanentDrawerLeft from '../components/Leftbar';
import RightPart from '../components/RightPartFeed';

function profile() {
  const currentUser="ABC";
  return (
    <div style={{ display: 'flex' ,background:'#FAFAFA',minHeight: '100vh' }}>
      <div>
        <PermanentDrawerLeft />
      </div>
      <div style={{ flex: '1' ,margin:'20px'}}> {/* Use flex: '1' to make this div expand */}
      <div style={{ marginBottom: '20px' }}>Hello, {currentUser}</div>
      <div style={{background: 'white', borderRadius: '16px',padding:'20px'}} >
        <ProfilePageMid />
        </div>
      </div>
      <div>
      <RightPart/>
      </div>
    </div>
  )
}

export default profile