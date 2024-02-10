import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ExplorePage from './Pages/explore';
import CreatePage from './Pages/create';
import LandingPage from './Pages/landing';
import FeedPage from './Pages/Feed';
import PostPage from './Pages/Postpage';
import ProjectPage from './Pages/project';
import QueryPage from './Pages/querypage';
import RequestPage from './Pages/request';
import Profile from './Pages/profile';
import CourseRevMain from './Pages/coursereviewmain';
import WorkOpp from './Pages/WorkPage';
import PageNotFound from './Pages/error';
import IndividualCourse from './Pages/individualcourse';
import MyProfilePage from './Pages/myprofile';
import Features from './Pages/features';
import Newthings from './Pages/whatsnew';
import About from './Pages/about';

// const utility=async ()=>{
//   const response =await axios.get("http://localhost:2015/users?page=1&limit=10");
//   console.log(response.data.users);
// }

function App() {
  // utility();
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/create' element={<CreatePage />} />
      <Route path='/explore' element={<ExplorePage />} />
      <Route path='/feed' element={<FeedPage />} />
      <Route path='/post' element={<PostPage />} />
      <Route path='/queries' element={<QueryPage />} >
        <Route
          path=":id"
          element={({ params }) => <QueryPage id={params.id} />}
        />
      </Route>
      <Route path='/project' element={<ProjectPage />} >
        <Route
          path=":id"
          element={({ params }) => <ProjectPage id={params.id} />}
        />
      </Route>
      <Route path='/request' element={<RequestPage />} />
      <Route path='/profile/:id' element={<Profile />} />
      <Route path='/profile' element={<MyProfilePage />} />
      <Route path='/courses' element={<CourseRevMain />}>
        <Route path=':courseId' element={<IndividualCourse />} />
      </Route>
      <Route path='/opportunities' element={<WorkOpp />} />
      
      <Route path='/features' element={<Features/>} />
      <Route path='/whats-new' element={<Newthings/>} />
      <Route path='/about' element={<About/>} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )

}

export default App