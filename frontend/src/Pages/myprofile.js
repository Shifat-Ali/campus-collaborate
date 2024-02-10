import React from 'react'
import PermanentDrawerLeft from '../components/Leftbar';
import RightPart from '../components/RightPartFeed';
import MyProfile from '../components/MyProfile';

function MyProfilePage() {
  const currentUser = "ABC";
  return (
    <div style={{ display: 'flex', background: '#FAFAFA', minHeight: '100vh' }}>
      <div>
        <PermanentDrawerLeft />
      </div>
      <div style={{ flex: '1', margin: '20px' }}> {/* Use flex: '1' to make this div expand */}
        <div style={{ marginBottom: '20px' }}>Hello, {currentUser}</div>
        <div style={{ background: 'white', borderRadius: '16px', padding: '20px' }} >
          <MyProfile />
        </div>
      </div>
      <div>
        <RightPart />
      </div>
    </div>
  )
}

export default MyProfilePage