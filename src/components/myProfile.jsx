import React, { useState } from "react";
import axios from "axios";
import "../styles/profile.css";

const MyProfile = ({ user }) => {
  const [profilePic, setProfilePic] = useState(null);

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("pfp", profilePic);
    formData.append("_id", user._id)
    try {
      const response = await axios.post(
        "http://localhost:3000/user/updatePFP",
        formData, 
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

     
    } catch (error) {
      console.error("Error updating profile picture:", error);
    }
  };
  if (!user) {
    return (
      <div className="error">
        <h1 className="error2">No user Found</h1>
      </div>
    );
  }

  const dob = new Date(user.dob || "");
  const date = `${dob.getMonth() + 1}/${
    dob.getDate() + 1
  }/${dob.getFullYear()}`;

  return (
    <>
      <div className="profile-container">
        <div className="profile-header">
          <h1>{user.username}</h1>
          <p>{user.country}</p>
        </div>
        <div className="profile-content">
          <img src={user.pfp} alt="" className="profile-picture" />
          <div className="profile-details">
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>Date Of Birth: {date}</p>
          </div>
        </div>
        <input type="file" className="addPFP" onChange={handleFileChange} />
        <button type="submit" onClick={onSubmit}>
          Upload Image
        </button>
      </div>
    </>
  );
};

export default MyProfile;
