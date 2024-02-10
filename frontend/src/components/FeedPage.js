import React from "react";
import PostCard1 from "./post1";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingScreen from "./Loading";

export default function ProfilePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  var queries = null;
  var prev = null;
  var next = null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2015/queries?page=1&limit=8');
        setData(JSON.parse(JSON.stringify(response.data)));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  queries = data.queries;
  prev = data.previous;
  next = data.next;
  console.log(prev, next);

  if (loading) {
    return <p><LoadingScreen /></p>;
    // return
    //   <LoadingScreen />;
  }



  return <>
    {queries.map((query, index) => (
      <PostCard1 key={index} data={query}> </PostCard1>
    ))}
    {/* <PostCard1 ></PostCard1>
    <PostCard1></PostCard1>
    <PostCard1></PostCard1>
    <PostCard1></PostCard1> */}
  </>;
}
