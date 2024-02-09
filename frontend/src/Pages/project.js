import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PermanentDrawerLeft from '../components/Leftbar';
import RightPart from '../components/RightPartFeed';
import ProfilePage from '../components/projectCard';
import CustomSeparator from '../components/breadcrumbproject';
import CommentSection from '../components/Comment';
function ProjectPage() {
  const currentUser = "User1";

  return (
    <div style={{ display: 'flex', background: '#FAFAFA', minHeight: '100vh' }}>
      <div>
        <PermanentDrawerLeft />
      </div>
      <div style={{ flex: '1', margin: '20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '20px' }}>
          <CustomSeparator/>
        </div>
        <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <ProfilePage/>
        <CommentSection/>
        </div>
      </div>
      <div>
        <RightPart />
      </div>
    </div>
  );
}

export default ProjectPage;
