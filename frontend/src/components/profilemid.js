import React, { useState } from "react";
import profileImage from "../media/render.jpg"; 
import Project from "./profilepagecarousel"
import Carousel from "./carouselprofile";
const ProfilePageMid = () => {
  const [userData, setUserData] = useState({name: "Chandan Kolaparthi", course: "B.Tech", branch: "ECE", year: "3rd year" ,clubs: ["Coding Club", "Automobile Club"], bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia, felis a vulputate eleifend, arcu nulla gravida lorem, sit amet consequat velit purus ut lorem. Curabitur a nisi vitae nisi pretium auctor. Fusce gravida non tellus sit amet volutpat. Integer.",tags: ['PHOTOSHOP', "FIGMA", "C++", "PYTHON"]})
  //const [name, setName] = useState("Chandan Kolaparthi");
  //const [course, setCourse] = useState("B.Tech");
  //const [branch, setBranch] = useState("ECE");
  //const [year, setYear] = useState("3rd year");
  //const [points, setPoints] = useState(35);
  //const [clubs, setClubs] = useState(["Coding Club", "Automobile Club"]);
  //const [bio, setBio] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia, felis a vulputate eleifend, arcu nulla gravida lorem, sit amet consequat velit purus ut lorem. Curabitur a nisi vitae nisi pretium auctor. Fusce gravida non tellus sit amet volutpat. Integer.");
  //const [tags, setTags] = useState(['PHOTOSHOP', "FIGMA", "C++", "PYTHON"]);

  return (
    <div style={{ backgroundColor: "#f8f8fa" }}>
      <div className="p-4">
        <div className="d-flex">
          <p className="text-secondary">Good Morning, {userData.name}!</p>

        </div>
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <img
                src={profileImage}
                className="rounded-circle"
                alt="Profile"
                style={{
                  aspectRatio: "1/1",
                  width: "10%",
                  height: "auto",
                  borderRadius: "50%",
                  marginRight: "2%",
                }}
              />
              <div>
                <h3>{userData.name}</h3>
                <small className="text-secondary">{userData.course} · {userData.branch} · {userData.year}</small>
                <div className="d-flex mt-2">
                  {userData.clubs.map((club, index) => (
                      <div key={index} className="rounded border px-2 mx-1">
                          {club}
                      </div>
                  ))}
                </div>
              </div>
              <a href="/" className="btn btn-primary ms-auto">+ Connect</a>
            </div>
            <div className="bio m-3" style={{width: "70%"}}>
              {userData.bio}
            </div>
            <hr />
            <div className="d-flex">
              {userData.tags.map((tag, index) => (
                <div key={index} className="rounded border px-2 mx-1">
                    {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Project/>
        
      </div>
      <div>
        <Carousel/>
        </div>
    </div>
  );
};

export default ProfilePageMid;
