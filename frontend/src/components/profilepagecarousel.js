import React, { useState } from "react";
import profileImage from "../media/render.jpg"; 
import Carousel from "./carouselprofile";

const New = () => {
  const [userData, setUserData] = useState({name: "Chandan Kolaparthi", course: "B.Tech", branch: "ECE", year: "3rd year", points: 35, clubs: ["Coding Club", "Automobile Club"], bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia, felis a vulputate eleifend, arcu nulla gravida lorem, sit amet consequat velit purus ut lorem. Curabitur a nisi vitae nisi pretium auctor. Fusce gravida non tellus sit amet volutpat. Integer.",tags: ['PHOTOSHOP', "FIGMA", "C++", "PYTHON"], connections: 375})
  const [projects, setProjects] = useState([
    { name: "Big Project", detail: "Aliquam tempor fermentum viverra. Proin fermentum dolor ipsum, eu scelerisque elit maximus sit amet. Proin porttitor sit...",badges:["SOFTWARE","AI"]},
    { name: "Big Project", detail: "Aliquam tempor fermentum viverra. Proin fermentum dolor ipsum, eu scelerisque elit maximus sit amet. Proin porttitor sit...",badges:["SOFTWARE","AI"] },
    { name: "Big Project", detail: "Aliquam tempor fermentum viverra. Proin fermentum dolor ipsum, eu scelerisque elit maximus sit amet. Proin porttitor sit...",badges:["SOFTWARE","AI"] },
    { name: "Big Project", detail: "Aliquam tempor fermentum viverra. Proin fermentum dolor ipsum, eu scelerisque elit maximus sit amet. Proin porttitor sit...",badges:["SOFTWARE","AI"] },
    { name: "Big Project", detail: "Aliquam tempor fermentum viverra. Proin fermentum dolor ipsum, eu scelerisque elit maximus sit amet. Proin porttitor sit...",badges:["SOFTWARE","AI"] }
  ]);
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
          <p className="ms-auto text-secondary">{userData.points} points earned today</p>
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
              <div className="ms-auto">
                {userData.connections} connections
              </div>
            </div>
          </div>
        </div>

        <div className="my-3 card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <p className="">Your Projects</p>
              <a href="" className="btn ms-auto text-primary">→</a>
            </div>
            <hr />

            <div>
              <div className="carousel-scroll">
                {projects.map((item) => (
                  <div key={item.id} className="mx-2 col-5">
                    <div className="card">
                      <div className="card-body">
                        <div style={{backgroundColor: "grey", height: "100px"}}></div>
                      </div>
                      <div className="card-footer d-flex flex-column">
                        <p>{item.name}</p>
                        <small className="text-secondary">{item.detail}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
      <div>
        <Carousel/>
      </div>
    </div>
  );
};

export default New;
