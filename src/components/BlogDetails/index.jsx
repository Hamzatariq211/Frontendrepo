import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./style.css"; // Your existing styles
import profile from "../../assets/images/person.jpeg"; // Keep the static profile image

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>; // Show a loading state
  }

  return (
    <div className="blog-details d-flex flex-column gap-3">
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
      <p className="text-lg">{blog.title}</p>
      <img src={blog.image} alt="info-img" loading="lazy" className="w-100" />

      <p className="text-md">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
