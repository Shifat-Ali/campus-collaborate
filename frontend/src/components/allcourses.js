import React from "react";
import Card from "./card";
import { useNavigate } from 'react-router';

export default function AllCourses() {

  const navigate = useNavigate();

    return <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '25px' }}>
    
      <div  onClick={() => navigate(':courseId')} style={{ height: '210px',backgroundColor:'#aac0fb', borderRadius:'20px',cursor: 'pointer' }}><Card/></div>
      <div  onClick={() => navigate(':courseId')} style={{ height: '210px',backgroundColor:'#aac0fb', borderRadius:'20px',cursor: 'pointer' }}><Card/></div>
      <div  onClick={() => navigate(':courseId')} style={{ height: '210px',backgroundColor:'#aac0fb', borderRadius:'20px',cursor: 'pointer' }}><Card/></div>
      <div  onClick={() => navigate(':courseId')} style={{ height: '210px',backgroundColor:'#aac0fb', borderRadius:'20px',cursor: 'pointer' }}><Card/></div>
      <div  onClick={() => navigate(':courseId')} style={{ height: '210px',backgroundColor:'#aac0fb', borderRadius:'20px',cursor: 'pointer' }}><Card/></div>
    </div>
     
    </>;
  }