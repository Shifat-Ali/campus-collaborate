import React from 'react';
import Carousel from '../components/carousel';
import PermanentDrawerLeft from '../components/Leftbar';
import RightPart from '../components/RightPartExplore';
import AllCourses from '../components/allcourses';
import { Outlet } from 'react-router';

function CourseRevMain() {
  const currentUser = "User1";
  return (
    <>
      <Outlet />
      <div style={{ display: 'flex', background: '#FAFAFA', minHeight: '100vh' }}>
        <div>
          <PermanentDrawerLeft />
        </div>
        <div style={{ flex: '1', margin: '20px' }}> {/* Use flex: '1' to make this div expand */}
          <div style={{ marginBottom: '20px' }}>Hello, {currentUser}</div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '20px' }} >
            <AllCourses />
          </div>
        </div>
        <div>
          <RightPart />
        </div>
      </div>
    </>
  );
}

export default CourseRevMain;
