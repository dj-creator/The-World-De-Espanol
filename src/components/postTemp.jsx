import React from "react";
import "../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const PostTemp = ({ title, author, summary , id, img }) => {
  return (
    <div >
       <div className="card">
    <img src={img} alt="Card Image" />
    <div className="card-content">
      <h2>{title}</h2>
      <p>{author}</p>
      <br />
      <p>{summary}</p>
      <div className="wrapper">
      <Link className="btn" to={`/blog/${id}`}> View Blog</Link>
      </div>

    </div>
    </div>
   
  </div>
  );
};

export default PostTemp;
