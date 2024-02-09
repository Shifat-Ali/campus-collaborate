import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PermanentDrawerLeft from '../components/Leftbar';
import RightPart from '../components/RightPartFeed';
import ProfilePage from '../components/FeedPage';
import FeedTop from '../components/feedtop';

function FeedPage() {
  const currentUser = "User1";

  return (
    <div style={{ display: 'flex', background: '#FAFAFA', minHeight: '100vh' }}>
      <div>
        <PermanentDrawerLeft />
      </div>
      <div style={{ flex: '1', margin: '20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '20px' }}>Hello, {currentUser}</div>
        <FeedTop />
        <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <span>Feed</span>
            <ArrowForwardIcon style={{ fontSize: '15px' }} />
          </div>
          <ProfilePage />
        </div>
      </div>
      <div>
        <RightPart />
      </div>
    </div>
  );
}

export default FeedPage;
