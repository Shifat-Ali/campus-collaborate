import React from "react";
import Card from "./card";
import { useNavigate } from 'react-router';
import { useEffect ,useState} from "react";
import axios from "axios";
import Loading from './Loading';
import { Navigate } from "react-router";

export default function AllCourses() {
  
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  var courses = null;
  var prev = null;
  var next = null;

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        
        const response = await axios.get('http://localhost:2015/courses/',{ params: { page: 1, limit: 10 }});
        //console.log(response.data.courses);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts
  
  courses = data.courses;
  prev = data.previous;
  next = data.next;

  if (loading) {
    return <p><Loading/></p>;
  }


    return <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '25px' }}>
      {courses.map((course, index) => (
        <div  onClick={() => navigate(':courseId')} style={{ height: '210px',backgroundColor:'#aac0fb', borderRadius:'20px',cursor: 'pointer' }}>
        <Card key={index} data={course} />
        </div>
      ))}
      <Card/>
    </div>
     
    </>;
  }