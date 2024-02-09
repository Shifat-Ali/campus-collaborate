import React from 'react';
import Carousel from '../components/carousel';
import PermanentDrawerLeft from '../components/Leftbar';
import RightPart from '../components/RightPartExplore';
import AllCourses from '../components/allcourses';
import AllReview from '../components/AllRatings';
import CommentSection from '../components/Comment';
import CoursesDes from '../components/coursedes';
import StarRating from '../components/AllRatings';
import { Typography, Button } from '@mui/material';

function IndividualCourse() {
  const currentUser = "User1";
  return (
    <div style={{ display: 'flex', background: '#FAFAFA', minHeight: '100vh' }}>
      <div>
        <PermanentDrawerLeft />
      </div>
      <div style={{ flex: '1', margin: '20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '20px' }}>Hello, {currentUser}</div>
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: '1', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom>Reviews</Typography>
            <CoursesDes/>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}> {/* Parent container for comment box and all reviews */}
              <div style={{ flex: '1', marginRight: '10px' }}> {/* Use flex: '1' to make them expand */}
                <CommentSection />
              </div>
              <div style={{ marginLeft: '10px' }}> {/* Align submit button to the right */}
                <StarRating/>
                <div style={{ marginTop: '20px' }}>
                  <Button variant="contained" color="primary">Submit Rating</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <RightPart />
      </div>
    </div>
  );
}

export default IndividualCourse;
