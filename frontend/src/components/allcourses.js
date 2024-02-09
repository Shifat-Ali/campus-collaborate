import React from "react";
import Card from "./card";


export default function AllCourses() {
  function handleClick() {
    console.log('div clicked!');
    // You can add your custom logic here
  }
    return <>
      <div style={{ display: 'grid',marginLeft:'20px',marginRight:'20px',marginTop:'10px',marginBottom:'10px', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '25px' }}>
    
      <div  onClick={handleClick} style={{ height: '200px',backgroundColor:'#aac0fb', borderRadius:'20px',cursor: 'pointer' }}><Card/></div>
      <div  onClick={handleClick} style={{ height: '200px',backgroundColor:'#aac0fb', borderRadius:'20px',cursor: 'pointer' }}><Card/></div>
      <div  onClick={handleClick} style={{ height: '200px',backgroundColor:'#aac0fb', borderRadius:'20px',cursor: 'pointer' }}><Card/></div>
      <div  onClick={handleClick} style={{ height: '200px',backgroundColor:'#aac0fb', borderRadius:'20px',cursor: 'pointer' }}><Card/></div>
      <div  onClick={handleClick} style={{ height: '200px',backgroundColor:'#aac0fb', borderRadius:'20px',cursor: 'pointer' }}><Card/></div>
    </div>
     
    </>;
  }
  