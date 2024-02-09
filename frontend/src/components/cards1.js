import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Card1() {
  return (
    <>
      <div
        style={{
          height: "90%",
          width: "99%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            marginLeft: "40px",
          }}
        >
          <div style={{ flex: 1, fontSize: "40px" }}>ME 101</div>
          <div style={{ flex: 1, fontSize: "15px", marginTop: "-8px" }}>
            Engineering Mechanics
          </div>
        </div>
        <div style={{ flex: 2,  display: "flex" }}>
          <div
            style={{
              flex: 2,
              marginLeft: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ flex: 4 }}></div>
            <div style={{ flex: 1, fontSize: "15px", marginLeft: "40px" }}>
              <span style={{ marginRight: "10px" }}>80 ratings</span>
              <span>57 reviews</span>
            </div>
          </div>
          <div style={{ flex: 3, display: "flex" }}>
            {/* <div
              style={{ flex: 5, display: "flex", flexDirection: "column" }}
            ></div> */}
            <div style={{ flex: 4}}></div>
            <div style={{flex:4,display:'flex' , flexDirection: "column"}}>
                <div style={{flex:1, justifyContent: 'center', alignItems: 'center', display: 'flex',borderBottom: '1px solid black'}}>Overall Rating</div>
                <div style={{flex:3 ,display:'flex'}}>
                <div style={{ flex: 3 }}>
              <BarChart
                xAxis={[{ scaleType: "band", data: ["1", "2", "3", "4", "5"] }]}
                series={[{ data: [40, 3, 5, 3, 4] }]}
                margin={{ left: 30, right: 10, top: 10, bottom: 28 }}
                width={150}
                height={110}
                colors={["black"]}
              />
            </div>
            <div style={{ flex: 1 }}>
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
           
          </div>
        </div>
      </div>
    </>
  );
}
