import React from "react";
import one from "../media/one.jpeg";
import two from "../media/two.jpeg";
import three from "../media/three.jpeg";
import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function IconLabelButtons() {
  return (
    <Button
      variant="contained"
      style={{
        height: "50%",
        width: "50%",
        color: "#90E0EF",
      }}
      endIcon={<KeyboardArrowRightIcon />}
    >
      
        Scroll to feed
      
    </Button>
  );
}

export default function FeedTop() {
  // Hardcoded number of posts
  const numberOfPosts = 50; // Fetch this from the backend in real scenario

  return (
    <>
      <div
        style={{
          width: "96%",
          display: "flex",
          marginTop: "10px",
          marginLeft: "25px",
          marginRight: "15px",
          borderRadius: "30px",
          border: "1px solid #ccc",
          background: "white",
        }}
      >
        <div style={{ flex: 1 }}>
          <button
            className="feedbutton"
            style={{
              width: "100%",
              backgroundColor: "#95baf5",
              background: "white",
              border: "0px",
              borderRadius: "30px", // Add border-radius to the button
            }}
            onClick={() => {}}
          >
            <img
              style={{
                width: "100%",
                
                borderRadius: "30px",
               // Add border-radius to the image
              }}
              src={three}
              alt="Button Image"
              
            />
          </button>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 0.3 }}></div>
          <div
            style={{
              width: "100%",
              height: "100%",
              textAlign: "center",
              color: "black",
              flex: 1,
            }}
            className="text1"
          >
            <p
              style={{
                lineHeight: "1.2",
                width: "60%",
                fontSize: "35px",
                fontWeight: "lighter",
                textAlign: "left",
              }}
            >
              Browse {numberOfPosts} new posts today
            </p>
          </div>
          <div style={{ flex: 1 }} className="text">
            <IconLabelButtons></IconLabelButtons>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "96%",
          display: "flex",
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "25px",
          marginRight: "15px",
        }}
      >
        <button
          className="feedbutton"
          style={{
            position: "relative",
            flex: 1,
            width: "97%",
            background: "white",
            border: "0px",
            borderRadius: "30px", // Add border-radius to the button
          }}
          onClick={() => {}}
        >
          <img
            style={{
              width: "100%",
              borderRadius: "30px", // Add border-radius to the image
              border: "1px solid #ccc",
            }}
            src={one}
            alt="Button Image"
          />
          <div
            style={{
              position: "absolute",
              top: "85%",
              left: "35%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "black",
            }}
          >
            <div className="text">
              <p style={{ lineHeight: "1.2", fontSize: "20px" }}>Sort by Tags</p>
            </div>
          </div>
        </button>
        <button
          className="feedbutton"
          style={{
            position: "relative",
            flex: 1.32,
            width: "97%",
            marginLeft: "20px",
            background: "white",
            border: "0px",
            borderRadius: "30px", // Add border-radius to the button
          }}
          onClick={() => {}}
        >
          <img
            style={{
              width: "100%",
              borderRadius: "30px", // Add border-radius to the image
              border: "1px solid #ccc ",
            }}
            src={two}
            alt="Button Image"
          />
          <div
            style={{
              position: "absolute",
              top: "70%",
              left: "55%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "black",
            }}
          >
            <div className="text">
              <p style={{ lineHeight: "1.1", fontSize: "20px" }}>Sort by Category</p>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
