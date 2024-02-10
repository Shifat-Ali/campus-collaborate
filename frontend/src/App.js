import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ExplorePage from './Pages/explore';
import CreatePage from './Pages/create';
import LandingPage from './Pages/landing';
import FeedPage from './Pages/Feed';
import PostPage from './Pages/Postpage';
import ProjectPage from './Pages/project';
import RequestPage from './Pages/request';
import Profile from './Pages/profile';
import CourseRevMain from './Pages/coursereviewmain';
import axios from "axios"


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
      <Route path='/project' element={<ProjectPage />} />
      <Route path='/request' element={<RequestPage />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/courses' element={<CourseRevMain />} />
    </Routes>
  )

}

export default App