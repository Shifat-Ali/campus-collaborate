import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExplorePage from './Pages/explore';
import CreatePage from './Pages/create';
import LandingPage from './Pages/landing';
import FeedPage from './Pages/Feed';
import PostPage from './Pages/Postpage';
import ProjectPage from './Pages/project';
import RequestPage from './Pages/request';
import Profile from './Pages/profile';
import axios from "axios"


// const utility=async ()=>{
//   const response =await axios.get("http://localhost:2015/users?page=1&limit=10");
//   console.log(response.data.users);
// }

function App() {
  // utility();
  return (
    // <Router>
    //   <Routes>
    //     `<Route path='/' exact Component={LandingPage} />
    //   </Routes>
    // </Router>
    <Profile />
  )

}

export default App