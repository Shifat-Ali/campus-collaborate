import React from "react";
import PostCard1 from "./projectpost";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { useParams } from "react-router";
import axios from "axios";

export default function ProfilePage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:2015/projects/${id}`);
        setData(JSON.parse(JSON.stringify(response.data)));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // let query = data.query;
  console.log('project data', data);

  if (loading) {
    return <p><Loading /></p>;
    // return
    //   <LoadingScreen />;
  }
  return <>
    <PostCard1 data={data}></PostCard1>
  </>;
}
