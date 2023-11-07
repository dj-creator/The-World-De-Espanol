import React, { useState } from "react";
import "../styles/blog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = ({ user }) => {
//Images for blogs
  const [blogImage, setblogImage] = useState(null);

  // const handleFileChange = (e) => {
  //   setblogImage(e.target.files[0]);
  // };

  const onSubmit = async (e) => {
    const formData = new FormData();

    formData.append("pic", e.target.files[0]);
    // formData.append("_id", user._id);

    try {
      const response = await axios.post(
        "http://localhost:3000/blog/updateIMG",
        formData, 
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      blogForm.blogImage = response.data.img;
    } catch (error) {
      console.error("Error updating profile picture:", error);
    }
  }
  // Blog form components 
  const [blogForm, setBlogForm] = useState({
    blogTitle: "",
    authorName: "",
    blogSummary: "",
    blogContent: "",
    blogImage: ""
  });

  let navigate = useNavigate();

  const handleChange = (event) => {
    setBlogForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post("http://localhost:3000/blog/create-blog", blogForm)
      .then((res) => {
        console.log("created", res.data.blog);
        navigate("/");
      });
  };

  return (
    <div className="container">
      <div className="blog-input-container">
        <form id="blog" onSubmit={handleSubmit}>
          <label htmlFor="blogTitle">Blog Title:</label>
          <input
            type="text"
            id="blogTitle"
            name="blogTitle"
            onChange={handleChange}
            required
          />

          <label htmlFor="authorName">Author's Name:</label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            onChange={handleChange}
            required
          />

          <label htmlFor="blogSummary">Blog Topic:</label>
          <textarea
            id="blogSummary"
            name="blogSummary"
            onChange={handleChange}
            required
          ></textarea>

          <label htmlFor="blogContent">Blog Content:</label>
          <textarea
            id="blogContent"
            name="blogContent"
            onChange={handleChange}
            required
          ></textarea>

          <input type="file" className="addPFP" onChange={onSubmit} />
          {/* <button type="submit" onClick={onSubmit}> */}
            {/* Upload Image */}
          {/* </button> */}

          <button type="submit">Submit Blog</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
