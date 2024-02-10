import React, { useState } from "react";
import profileImage from "../media/ayush.jpeg";
import { FaTimes } from 'react-icons/fa'
import Carousel from "./carouselprofile";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Chandan Kolaparthi",
    course: "B.Tech",
    branch: "ECE",
    year: "3rd year",
    points: 35,
    clubs: [
      "Coding Club",
      "Automobile Club"
    ],
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia, felis a vulputate eleifend, arcu nulla gravida lorem, sit amet consequat velit purus ut lorem. Curabitur a nisi vitae nisi pretium auctor. Fusce gravida non tellus sit amet volutpat. Integer.",
    tags: [
      "PHOTOSHOP",
      "FIGMA",
      "C++",
      "PYTHON",
      "PHOTOSHOP",
      "FIGMA",
      "C++",
      "PYTHON",
      "PHOTOSHOP",
      "FIGMA",
      "C++",
      "PYTHON",
    ],
    followers: [
      { following_user_id: 1, username: "John", image: profileImage },
      { following_user_id: 2, username: "David", image: profileImage },
    ],
    following: [
      { following_user_id: 1, username: "John", profile_photo: profileImage },
      { following_user_id: 2, username: "David", profile_photo: profileImage },
    ],
  });

  const [projects, setProjects] = useState([
    {
      name: "Big Project",
      detail:
        "Aliquam tempor fermentum viverra. Proin fermentum dolor ipsum, eu scelerisque elit maximus sit amet. Proin porttitor sit...",
      badges: ["SOFTWARE", "AI"],
    },
    {
      name: "Big Project",
      detail:
        "Aliquam tempor fermentum viverra. Proin fermentum dolor ipsum, eu scelerisque elit maximus sit amet. Proin porttitor sit...",
      badges: ["SOFTWARE", "AI"],
    },
    {
      name: "Big Project",
      detail:
        "Aliquam tempor fermentum viverra. Proin fermentum dolor ipsum, eu scelerisque elit maximus sit amet. Proin porttitor sit...",
      badges: ["SOFTWARE", "AI"],
    },
    {
      name: "Big Project",
      detail:
        "Aliquam tempor fermentum viverra. Proin fermentum dolor ipsum, eu scelerisque elit maximus sit amet. Proin porttitor sit...",
      badges: ["SOFTWARE", "AI"],
    },
    {
      name: "Big Project",
      detail:
        "Aliquam tempor fermentum viverra. Proin fermentum dolor ipsum, eu scelerisque elit maximus sit amet. Proin porttitor sit...",
      badges: ["SOFTWARE", "AI"],
    },
  ]);

  const [modalData, setModalData] = useState({
    type: null, // 'followers' or 'following'
    list: [],
  });

  const [newTag, setNewTag] = useState("");

  const openModal = (type) => {
    setModalData({
      type,
      list: type === "followers" ? userData.followers : userData.following,
    });
    document.getElementById("followerModalToggleBtn").click(); // Trigger modal open
  };

  const addTag = () => {
    if (newTag.trim() !== "") {
      setUserData((prevData) => ({
        ...prevData,
        tags: [...prevData.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const removeTag = (index) => {
    setUserData((prevData) => {
      const updatedTags = [...prevData.tags];
      updatedTags.splice(index, 1);
      return {
        ...prevData,
        tags: updatedTags,
      };
    });
  };

  return (
    <div>
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
                <small className="text-secondary">
                  {userData.course} · {userData.branch} · {userData.year}
                </small>
                <div
                  className="d-flex mt-2 flex-wrap"
                  style={{ width: "85%" }}
                >
                  {userData.clubs.map((club, index) => (
                    <div
                      key={index}
                      className="rounded border px-2 mx-1 my-1"
                    >
                      {club}
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-flex flex-column my-2 me-3 ms-auto">
                <p onClick={() => openModal("followers")}>
                  Followers {userData.followers.length}
                </p>
                <p onClick={() => openModal("following")}>
                  Following {userData.following.length}
                </p>
              </div>
            </div>
            <div
              className="bio m-3"
              style={{ width: "70%" }}
            >
              {userData.bio}
            </div>
            <hr />
            <div className="d-flex">
              <div
                className="d-flex flex-wrap"
                style={{ width: "70%" }}
              >
                {userData.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center rounded border px-3 py-1 mx-1 my-1"
                  >
                    <span>{tag}</span>
                    <button
                      className="btn btn-outline-danger btn-sm ms-2"
                      onClick={() => removeTag(index)}
                    >
                      <FaTimes />
                    </button>
                  </div>
                ))}
                <div className="input-group my-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add more tags"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={addTag}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-3 card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <p className="">Your Projects</p>
              <a href="/" className="btn ms-auto text-primary">
                →
              </a>
            </div>
            <hr />

            <div>
              <div
                className="carousel-scroll d-flex overflow-scroll"
              >
                {projects.map((item) => (
                  <div key={item.id} className="mx-2 col-5">
                    <div className="card">
                      <div className="card-body">
                        <div
                          style={{
                            backgroundColor: "grey",
                            height: "100px",
                          }}
                        ></div>
                      </div>
                      <div className="card-footer d-flex flex-column">
                        <p>{item.name}</p>
                        <small className="text-secondary">
                          {item.detail}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Followers/Following Modal */}
        <div className="modal fade" id="followerModal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {modalData.type === "followers"
                    ? "Followers"
                    : "Following"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {modalData.list.map((follower, index) => (
                  <div key={index} className="d-flex align-items-center my-2">
                    <img
                      src={follower.image || follower.profile_photo}
                      className="rounded-circle me-2"
                      alt={follower.username}
                      style={{
                        aspectRatio: "1/1",
                        width: "30px",
                        height: "auto",
                        borderRadius: "50%",
                      }}
                    />
                    <span>{follower.username}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hidden button to trigger modal open */}
        <button
          id="followerModalToggleBtn"
          type="button"
          className="d-none"
          data-bs-toggle="modal"
          data-bs-target="#followerModal"
        ></button>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default MyProfile;
