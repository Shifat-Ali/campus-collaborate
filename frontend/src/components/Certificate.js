import React, { useState } from "react";


const Certificate = () => {
  const [Certificate, setcertificate] = useState([
    {
      name: "Advancing Your Skills As an L&D Professional",
      college: "IIT Guwahati",
      date:'Issued Aug 23, 2022',
      badges:["Softwate","AI"],
      imglink:"#"
    },
    {
      name: "Advancing Your Skills As an L&D Professional",
      college: "IIT Guwahati",
      date:'Issued Aug 23, 2022',
      badges:["Softwate","AI"],
      imglink:"#"
    },
    {
      name: "Advancing Your Skills As an L&D Professional",
      college: "IIT Guwahati",
      date:'Issued Aug 23, 2022',
      badges:["Softwate","AI"],
      imglink:"#"
    },
    {
      name: "Advancing Your Skills As an L&D Professional",
      college: "IIT Guwahati",
      date:'Issued Aug 23, 2022',
      badges:["Softwate","AI"],
      imglink:"#"
    },
    {
      name: "Advancing Your Skills As an L&D Professional",
      college: "IIT Guwahati",
      date:'Issued Aug 23, 2022',
      badges:["Softwate","AI"],
      imglink:"#"
    },
  ]);

  const CertificateModal = ({ certificate, closeModal }) => {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="modal" onClick={closeModal} style={{position: 'relative',height:'200px',width:'370px',borderRadius:'16px',backgroundColor:'#DFDFDF',padding:'20px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems: 'center'}}>
          <h3>Image of Certificate</h3>
          <span className="close" onClick={closeModal} style={{fontSize:'20px',cursor:'pointer'}}>&times;</span>
          </div> 
        <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{width: '100%', height: 'auto', overflow: 'hidden'}} >
          
          <img src={certificate.imglink} alt="Certificate" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
        </div>
      </div>
      </div>
    );
  };


  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (index) => {
    setSelectedCert(Certificate[index]);
  };
  
  const closeModal = () => {
    setSelectedCert(null);
  };


  return (
    <div>
      <div style={{padding:'20px',display:'flex',flexDirection:'column',gap:'20px',overflowY:'auto',height:'400px' ,scrollbarWidth:'none'}}>
        {Certificate.map((Certificate, index) => (
          <div
            key={index}
            className="card"
            onClick={() => openModal(index)}
            style={{ cursor: "pointer" }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <div className="card-body" style={{height:'150px'}}>
              <div className="d-flex align-items-center" style={{display:'flex'}}>
                <div style={{width:'190px',height:'120px',backgroundColor:'#0000001A',borderRadius:'16px',marginRight:'15px'}}><img
                  src="#"
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
                </div>
                <div>
                  <h4 style={{fontWeight:'500'}}>{Certificate.name}</h4>
                  <small className="text-secondary">{Certificate.college}</small>
                  <p style={{marginBottom:'6px'}}><small>{Certificate.date}</small></p>
                  {Certificate.badges.map((badge, badgeIndex) => (
                    <span key={badgeIndex}  style={{color:'black',padding:'2px',marginRight:'8px',border:'1px solid #D9D9D9', backgroundColor:'#0000001A'}}>{badge}</span>
                  ))}
                  </div>
            </div>
          </div>
          <hr></hr>
          </div>  
        ))}
    </div>
    {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Certificate;
