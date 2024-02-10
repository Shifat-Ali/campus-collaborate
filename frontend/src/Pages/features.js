import React from 'react';
import Navbar from '../components/navbar';

function Features() {
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
      <h1>Features</h1>
      
      <div style={{
        display:'grid',
        
      }}>
      <div style={featureStyle}>
        <h2>1. Project Collaboration</h2>
        <p>
          <strong>Connect with Peers:</strong> Easily connect with fellow college students based on shared interests, courses, or projects.<br />
          <strong>Create Projects:</strong> Initiate new projects and invite collaborators from your college community.<br />
          <strong>Join Existing Projects:</strong> Explore and join projects created by others to contribute your skills and expertise.
        </p>
      </div>

      <div style={featureStyle}>
        <h2>2. Seamless Integration</h2>
        <p>
          <strong>Single Sign-On:</strong> Sign in effortlessly using your college Outlook ID, ensuring a seamless login experience.<br />
          <strong>Outlook Integration:</strong> Leverage your Outlook ID for authentication and communication, streamlining your workflow.
        </p>
      </div>
      <div style={featureStyle}>
        <h2>3. Project Review & Ratings</h2>
        <p>
          <strong>Peer Review:</strong> Provide constructive feedback and reviews on other students' projects.<br />
          <strong>Rating System:</strong> Rate projects based on quality, creativity, and innovation to recognize outstanding work.
        </p>
      </div>

      <div style={featureStyle}>
        <h2>4. Collaboration Tools</h2>
        <p>
          <strong>Task Management:</strong> Utilize built-in task management tools to organize and assign project tasks effectively.<br />
          <strong>File Sharing:</strong> Share documents, resources, and files securely within project teams for collaboration.
        </p>
      </div>

      <div style={featureStyle}>
        <h2>5. Networking Opportunities</h2>
        <p>
          <strong>Expand Your Network:</strong> Build connections with like-minded individuals and potential collaborators from your college.<br />
          <strong>Discover Projects:</strong> Explore a variety of projects across different disciplines and fields of study.
        </p>
      </div>

      <div style={featureStyle}>
        <h2>6. Privacy & Security</h2>
        <p>
          <strong>Secure Platform:</strong> Rest assured knowing that your data is protected with robust security measures.<br />
          <strong>Privacy Controls:</strong> Maintain control over your profile and project visibility with customizable privacy settings.
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

export default Features;
