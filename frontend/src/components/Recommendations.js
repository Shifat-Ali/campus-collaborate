import React, { useState } from "react";
import profileImage from "../media/ayush.jpeg";

const Recommendations = () => {
  const [recomm, setRecomm] = useState([
    {
      name: "Aravind S.",
      course: "B.Tech",
      branch: "ECE",
      year: "3rd year",
      rec:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      image: profileImage,
    },
    {
      name: "Aravind S.",
      course: "B.Tech",
      branch: "ECE",
      year: "3rd year",
      rec:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      image: profileImage,
    },
    {
      name: "Vind S.",
      course: "B.Tech",
      branch: "ECE",
      year: "3rd year",
      rec:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      image: profileImage,
    },
    {
      name: "Aravind S.",
      course: "B.Tech",
      branch: "ECE",
      year: "3rd year",
      rec:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      image: profileImage,
    },
    // ... (other recommendations)
  ]);

  const [selectedRec, setSelectedRec] = useState(null);

  const openModal = (index) => {
    setSelectedRec(recomm[index]);
  };

  return (
    <div className="col-md-8  w-100%" style={{ width: '1056px' }}>
      <div className="p-4">
        {recomm.map((recom, index) => (
          <div
            key={index}
            className="card"
            onClick={() => openModal(index)}
            style={{ cursor: "pointer" }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <div className="card-body">
              <div className="d-flex align-items-center">
                <img
                  src={profileImage}
                  className="rounded-circle"
                  alt="Profile"
                  style={{
                    aspectRatio: "1/1",
                    width: "5%",
                    height: "auto",
                    borderRadius: "50%",
                    marginRight: "2%",
                  }}
                />
                <div>
                  <h4>{recom.name}</h4>
                  <small className="text-secondary">{recom.course} · {recom.branch} · {recom.year}</small>
                </div>
              </div>
              <p className="my-2">{recom.rec}</p>
            </div>
          </div>
        ))}

        <div className="modal fade" id="exampleModal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img
                  src={selectedRec ? selectedRec.image : profileImage}
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
                  <h1 className="modal-title fs-5">
                    {selectedRec ? selectedRec.name : "Modal title"}
                  </h1>
                  <small className="text-secondary">{selectedRec ? selectedRec.course : ""} · {selectedRec ? selectedRec.branch : ""} · {selectedRec ? selectedRec.year : ""}</small>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">{selectedRec ? selectedRec.rec : "..."}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
