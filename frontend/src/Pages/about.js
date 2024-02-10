import React from 'react';
import Navbar from '../components/navbar';

function About() {
  return (

   <div style={{
    display:'flex',
    justifyContent:'center',
   }}>
    <Navbar/>
     <div style={{fontFamily: 'Arial, sans-serif',
     justifyContent:'center',
     marginTop:'10vh',
  maxWidth: '800px',
  marginTop:'10vh',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  color: '#333',}}>
      <h1>About Peerhub</h1>
      
      <div style={{
        display:'grid',
        
      }}>
      <div style={featureStyle}>
        <p><strong>Peerhub</strong> is a web application made by the residents of the <strong>Brahmaputra Hostel</strong>,IIT Guwahati. It enables the Campus-janta to Create,Connect and Collaborate with people who have mutual interests and passion in the campus.</p>
        
          
      </div>

      <div style={featureStyle}>
        <p>
        Driven by the collective vision of fostering meaningful interactions and igniting creative synergies, Peerhub empowers students, faculty, and staff alike to explore and engage with like-minded peers who share mutual interests, passions, and pursuits. Whether it's delving into academic projects, exploring entrepreneurial ventures, or simply connecting over shared hobbies, Peerhub offers a vibrant ecosystem where ideas thrive and collaborations flourish.
        </p>
          
      </div>
      <div style={featureStyle}>
        <p>
        At the heart of Peerhub lies a commitment to inclusivity and diversity, where individuals from all backgrounds and disciplines converge to exchange knowledge, share experiences, and embark on transformative journeys together. Through intuitive features and user-friendly interfaces, Peerhub streamlines the process of discovering potential collaborators, initiating projects, and nurturing meaningful connections that transcend the boundaries of classrooms and departments.
        </p>
      </div>
     <div style={featureStyle}>
        <p>
        As a cornerstone of campus life, Peerhub embodies the ethos of community-driven innovation, empowering individuals to harness their collective potential and embark on transformative journeys of discovery and collaboration. Whether you're a budding entrepreneur, a passionate researcher, or simply someone with a thirst for knowledge and exploration, Peerhub welcomes you to join our vibrant community and embark on a journey of endless possibilities."
        </p>
     </div>

      
      </div>

      {/* Add more feature sections as needed */}

    </div>
   </div>
  );
}



const featureStyle = {
  marginBottom: '20px',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '5px',
};

export default About;
