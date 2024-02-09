// import "./styles.css";
import React, { useState } from "react";
import '../App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { BarChart } from "@mui/x-charts/BarChart";

function StarRating(){
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleMouseOver = (index) => {
        setHover(index);
    };

    const handleMouseLeave = () => {
        setHover(0);
    };

    const handleClick = (index) => {
        setRating(index);
    };

    const handleSubmit = () => {
        // Here, you can submit the rating to the server or perform any other action
        console.log('Submitted rating:', rating);
        // Reset the rating after submission (optional)
        setRating(0);
      };

      return (
        <div >
            <div style={{height:'50px'}}>
            <p style={{ display: 'flex', justifyContent: 'center' }}>Your Overall Rating</p>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
            {[...Array(5)].map((star, index) => {
                const starValue = index + 1;

                return (
                    
                    <span
                        key={index}
                        style={{
                            cursor: 'pointer',
                            
                            color: starValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'
                        }}
                        onMouseOver={() => handleMouseOver(starValue)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(starValue)}
                    >
                        &#9733;
                    </span>
                );
            })}
            </div>
            </div>
       
           
        </div>
    );
    
}

function StarRating1(){
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleMouseOver = (index) => {
        setHover(index);
    };

    const handleMouseLeave = () => {
        setHover(0);
    };

    const handleClick = (index) => {
        setRating(index);
    };

    const handleSubmit = () => {
        // Here, you can submit the rating to the server or perform any other action
        console.log('Submitted rating:', rating);
        // Reset the rating after submission (optional)
        setRating(0);
      };

      return (
        <div   >
            <div style={{height:'30px',display:'flex', justifyContent: 'center'}}>
            <p style={{ display: 'flex' }}>Your Rating</p>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
            {[...Array(5)].map((star, index) => {
                const starValue = index + 1;

                return (
                    
                    <span
                        key={index}
                        style={{
                            cursor: 'pointer',
                            
                            color: starValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'
                        }}
                        onMouseOver={() => handleMouseOver(starValue)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(starValue)}
                    >
                        &#9733;
                    </span>
                );
            })}
            </div>
            </div>
       
           
        </div>
    );
    
}


function AllReview() {
   

    return (
        <div   >
            <div style={{height:'50px'}}>
            <StarRating></StarRating>
          
            </div>
         
         
           
           {/* <div style={{ display: 'flex', justifyContent: 'center',marginTop:'5px'}}>
           <Button variant="contained" onClick={handleSubmit}  >Submit</Button>
           </div> */}
           <div style={{display:'flex',  flexDirection: "column" ,marginTop:'20px'}}>
            <div style={{flex:1,display: 'flex', justifyContent: 'center', borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: 'black'}}>
              Course Relevance
            </div>
            <div style={{flex:3,display:'flex'}}>
            <div style={{flex:3}}>
            <BarChart
                xAxis={[{ scaleType: "band", data: ["1", "2", "3", "4", "5"] }]}
                series={[{ data: [40, 3, 5, 3, 4] }]}
                margin={{ left: 30, right: 10, top: 10, bottom: 28 }}
                width={150}
                height={110}
                colors={["black"]}
              />
            </div>
            <div style={{flex:'1'}}>
            <div  >
              {/* <div style={{ height: "70px" }}></div> */}
              <div
                style={{
                  height: "110px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1>4.5</h1>
                <h1 style={{ marginTop: "-5px", marginBottom: "-12px" }}>
                  *****
                </h1>
              </div>
            </div>
            </div>
            </div>
          <StarRating1></StarRating1>
          
           </div>
           <div style={{display:'flex',  flexDirection: "column" ,marginTop:'20px'}}>
            <div style={{flex:1,display: 'flex', justifyContent: 'center', borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: 'black'}}>
             Understandability
            </div>
            <div style={{flex:3,display:'flex'}}>
            <div style={{flex:3}}>
            <BarChart
                xAxis={[{ scaleType: "band", data: ["1", "2", "3", "4", "5"] }]}
                series={[{ data: [40, 3, 5, 3, 4] }]}
                margin={{ left: 30, right: 10, top: 10, bottom: 28 }}
                width={150}
                height={110}
                colors={["black"]}
              />
            </div>
            <div style={{flex:'1'}}>
            <div  >
              {/* <div style={{ height: "70px" }}></div> */}
              <div
                style={{
                  height: "110px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1>4.5</h1>
                <h1 style={{ marginTop: "-5px", marginBottom: "-12px" }}>
                  *****
                </h1>
              </div>
            </div>
            </div>
            </div>
          <StarRating1></StarRating1>
          
           </div>
           <div style={{display:'flex',  flexDirection: "column" ,marginTop:'20px'}}>
            <div style={{flex:1,display: 'flex', justifyContent: 'center', borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: 'black'}}>
             Ease of Scoring
            </div>
            <div style={{flex:3,display:'flex'}}>
            <div style={{flex:3}}>
            <BarChart
                xAxis={[{ scaleType: "band", data: ["1", "2", "3", "4", "5"] }]}
                series={[{ data: [40, 3, 5, 3, 4] }]}
                margin={{ left: 30, right: 10, top: 10, bottom: 28 }}
                width={150}
                height={110}
                colors={["black"]}
              />
            </div>
            <div style={{flex:'1'}}>
            <div  >
              {/* <div style={{ height: "70px" }}></div> */}
              <div
                style={{
                  height: "110px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1>4.5</h1>
                <h1 style={{ marginTop: "-5px", marginBottom: "-12px" }}>
                  *****
                </h1>
              </div>
            </div>
            </div>
            </div>
          <StarRating1></StarRating1>
          
           </div>
           <div style={{display:'flex',  flexDirection: "column" ,marginTop:'20px'}}>
            <div style={{flex:1,display: 'flex', justifyContent: 'center', borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: 'black'}}>
             Faculty Rating
            </div>
            <div style={{flex:3,display:'flex'}}>
            <div style={{flex:3}}>
            <BarChart
                xAxis={[{ scaleType: "band", data: ["1", "2", "3", "4", "5"] }]}
                series={[{ data: [40, 3, 5, 3, 4] }]}
                margin={{ left: 30, right: 10, top: 10, bottom: 28 }}
                width={150}
                height={110}
                colors={["black"]}
              />
            </div>
            <div style={{flex:'1'}}>
            <div  >
              {/* <div style={{ height: "70px" }}></div> */}
              <div
                style={{
                  height: "110px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1>4.5</h1>
                <h1 style={{ marginTop: "-5px", marginBottom: "-12px" }}>
                  *****
                </h1>
              </div>
            </div>
            </div>
            </div>
          <StarRating1></StarRating1>
          
           </div>
           
          
           
        </div>
    );
}

export default AllReview;


 
