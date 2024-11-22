import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css"; // Your existing styles
import profile from "../../assets/images/person.jpeg"; // Static profile image
import { useParams } from "react-router-dom";

const LastBlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams(); // Extract the id from the URL

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/blogs/${id}/`); // Use the extracted id here
        if (response) {
          setBlog(response.data); // Set the blog data
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    if (id) {
      fetchBlog(); // Fetch the blog only if id is available
    }
  }, [id]);
  console.log(blog, "blog");
  if (!blog) {
    return <div>Loading...</div>; // Show a loading state while fetching the blog data
  }

  return (
    <div className="blog-details d-flex flex-column gap-3">
      {/* Blog Author */}
      <div className="d-flex align-items-center gap-2">
        <img
          src={profile}
          alt="profile"
          width={40}
          height={40}
          className="profile h-10 w-10 rounded-full"
        />
        <h6 className="text-sm">{blog.author}</h6>
      </div>
      
      {/* Blog Title */}
      <p className="text-lg font-bold">{blog.title}</p>
      
      {/* Blog Content */}
      <p className="text-md">{blog.blog_data}</p>
    </div>
  );
};

export default LastBlogDetails;
