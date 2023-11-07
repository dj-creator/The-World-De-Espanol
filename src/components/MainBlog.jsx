import React, { useEffect, useState } from "react";
import "../styles/mainBlog.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const MainBlog = () => {
  const [blog, setBlog] = useState();

  let { id } = useParams();

  useEffect(() => {
    const getBlog = async () => {
      await axios.get(`http://localhost:3000/blog/${id}`).then((res) => {
        console.log(res.data.blog);
        setBlog(res.data.blog);
      });
    };

    getBlog();
  }, []);

  if (blog) {
    return (
      <div id="mainBlog">
        <div id="inner">
          <h1 className="title">{blog.title}</h1>
          <br />
          <br />
          <p className="align">{blog.content}</p>
        </div>
      </div>
    );
  }
};

export default MainBlog;
