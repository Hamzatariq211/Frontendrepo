import React, { useEffect, useState } from "react";
import "./style.css";
import BlogCard from "./BlogCard";
import axios from "axios";
const SugBlogs = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`https://fusionflare-02ef9f77a95d.herokuapp.com/api/blogs/`); // Fetch all blogs
        if (response) {
          setBlogs(response.data); // Set the last blog in the list
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  if (!blogs) {
    return <div>Loading...</div>; // Show a loading state while fetching the blog data
  }
  return (
    <div className="sug-blogs d-flex flex-column gap-5">
      <h4 className="text-lg">For You</h4>
      <div className="d-flex flex-column gap-3">
        {blogs.map((blog) => (
          <div key={blog.id}>
            <BlogCard title={blog.title} name={blog.author} id={blog.id}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SugBlogs;
