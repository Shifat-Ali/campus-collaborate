import React from "react";
import { BarChart } from '@mui/x-charts/BarChart';



export default function Card(props) {

//console.log(props.data.title);
if (props.data)
{
 const course = {
    "title": props.data.title,
    "overall": props.data.overallRate,
    "ones": props.data.ratings.ones,
    "twos": props.data.ratings.twos,
    "threes": props.data.ratings.threes,
    "fours": props.data.ratings.fours,
    "fives": props.data.ratings.fives,
    "number": props.data.numOfRates,
  }

    
    let onecount=parseInt(course.ones);
    let twocount=parseInt(course.twos);
    let threecount=parseInt(course.threes);
    let fourcount=parseInt(course.fours);
    let fivecount=parseInt(course.fives);
    

    return <>

       <div style={{height:'90%',width:'100%',display:'flex', flexDirection: "column"}}>
         <div style={{flex:1,display:'flex',flexDirection: "column",marginLeft:'10px'}}>
            <div  style={{flex:1,fontSize:'40px'}}>{course.title}</div>
            <div  style={{flex:1,fontSize:'40px'}}>{course.description}</div>
            
         </div>
         <div style={{flex:2 ,display:'flex'}}>
            <div style={{flex:1 ,marginLeft:'10px',display:'flex',flexDirection: "column"}}>
                <div  style={{flex:4}}></div>
                <div  style={{flex:1,fontSize:'12px',marginLeft:'5px'}}>{course.number} ratings</div>
            </div>
            <div style={{flex:3 ,display:'flex'}}>
            <div style={{flex:0.5}}></div>
                <div style={{flex:6}}>
                <BarChart
                    xAxis={[{ scaleType: 'band', data: ['1', '2', '3','4','5'] }]}
                    series={[{ data: [onecount, twocount, threecount,fourcount,fivecount] }]}
                    margin={{ left: 50, right: 5, top: 40, bottom: 28 }}
                    width={150}
                    height={120}
                    colors={['black']}
                    />
                </div>
                <div style={{flex:1}}>
                    <div style={{height:'70px'}}></div>
                    <div style={{height:'50px', display: 'flex',flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
                        <h1>{course.overall}</h1>
                        <h1 style={{marginTop:'-5px',marginBottom:'15px',paddingRight:'12px'}}>*****</h1>
                    </div>
                </div>
                  
            </div>
         </div>
       </div>
    </>;
}
  }
  