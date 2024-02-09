
import React from 'react'
import ExplorePage from './Pages/explore';
import CreatePage from './Pages/create';
import LandingPage from './Pages/landing';
import FeedPage from './Pages/Feed';
import PostPage from './Pages/Postpage';
import ProjectPage from './Pages/project';
import RequestPage from './Pages/request';
import axios from "axios"

async function App() {
  const response =await axios.get("http://localhost:2015/users?page=1&limit=10");
  console.log(response.data.users);
  return (<LandingPage/>)
  
}

export default App