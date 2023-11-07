import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import PostTemp from "./postTemp";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      await axios.get("http://localhost:3000/blog/get-blogs").then((res) => {
        // console.log(res.data);
        setBlogs(res.data.blog);
      });
    };

    getBlogs();
  }, []);

  return (
    <>
      <h1 id="Public-Post">Posts:</h1>
      <div>
        <div className="boxy">
          {blogs.length ? (
            <>
              {blogs.map((blog) => {
                return (
                  <PostTemp
                    title={blog.title}
                    author={blog.author}
                    summary={blog.summary}
                    key={blog._id} 
                    id ={blog._id}
                    img={blog.img}
                  />
                );
              })}
            </>
          ) : (
            <>No Blogs Yet</>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
