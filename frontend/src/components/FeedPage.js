import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard1 from "./post1";
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
        setData(response.data);
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

  if (loading) {
    return <p><LoadingScreen /></p>;
  }

  return (
    <>
      {queries.map((query, index) => (
        <PostCard1 key={index} data={query} />
      ))}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        {prev && (
          <button onClick={() => console.log("Previous clicked")} style={{background:'white',borderRadius:'5px',height:'30px',width:'80px'}}>Previous</button>
        )}
        <div></div> {/* Empty div to push the Next button to the right */}
        {next && (
          <button onClick={() => console.log("Next clicked")} style={{background:'white',borderRadius:'5px',height:'30px',width:'80px'}}>Next</button>
        )}
      </div>
    </>
  );
}
