import React from 'react';
import Navbar from '../components/navbar';

function Newthings() {
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
      <h1>Whats New</h1>
      
      <div style={{
        display:'grid',
        
      }}>
      <div style={featureStyle}>
        <h2>Improved Project Management Tools:</h2>
        <p>
        Introducing a Kanban board feature for visual project tracking. <br />
        Adding task dependencies and subtasks for more detailed project planning. <br />
        Implementing deadline reminders and notifications for task completion. <br />
        </p>
      </div>
      <div style={featureStyle}>
        <h2>Notifications & Updates</h2>
        <p>
          <strong>Real-Time Updates:</strong> Stay informed about project activity, feedback, and collaboration requests with instant notifications.<br />
          <strong>Customizable Alerts:</strong> Tailor your notification preferences to receive updates that matter most to you.
        </p>
      </div>

      <div style={featureStyle}>
        <h2>Community Engagement</h2>
        <p>
          <strong>Events & Workshops:</strong> Participate in workshops, events, and hackathons organized within your college community.<br />
          <strong>Discussion Forums:</strong> Engage in discussions, share ideas, and seek advice from peers and mentors.
        </p>
      </div>
      
     
      </div>

      {/* Add more feature sections as needed */}
      <h1 style={{
        color:'red',
        justifyContent:'center',
      }}>More New features Coming Soon!!</h1>
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

export default Newthings;
