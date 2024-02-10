import React from "react";
import { BarChart } from '@mui/x-charts/BarChart';



export default function Card() {

    
    return <>
       <div style={{height:'90%',width:'100%',display:'flex', flexDirection: "column"}}>
         <div style={{flex:1,display:'flex',flexDirection: "column",marginLeft:'10px'}}>
            <div  style={{flex:1,fontSize:'40px'}}>ME 101</div>
            <div  style={{flex:1,fontSize:'15px',marginTop:'-8px'}}>Engineering Mechanics</div>
         </div>
         <div style={{flex:2 ,display:'flex'}}>
            <div style={{flex:1 ,marginLeft:'10px',display:'flex',flexDirection: "column"}}>
                <div  style={{flex:4}}></div>
                <div  style={{flex:1,fontSize:'12px',marginLeft:'5px'}}>400 ratings</div>
            </div>
            <div style={{flex:3 ,display:'flex'}}>
            <div style={{flex:0.5}}></div>
                <div style={{flex:6}}>
                <BarChart
                    xAxis={[{ scaleType: 'band', data: ['1', '2', '3','4','5'] }]}
                    series={[{ data: [40, 3, 5,3,4] }]}
                    margin={{ left: 50, right: 5, top: 40, bottom: 28 }}
                    width={150}
                    height={120}
                    colors={['black']}
                    />
                </div>
                <div style={{flex:1}}>
                    <div style={{height:'70px'}}></div>
                    <div style={{height:'50px', display: 'flex',flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
                        <h1>4.5</h1>
                        <h1 style={{marginTop:'-5px',marginBottom:'15px',paddingRight:'12px'}}>*****</h1>
                    </div>
                </div>
                  
            </div>
         </div>
       </div>
    </>;
  }
  