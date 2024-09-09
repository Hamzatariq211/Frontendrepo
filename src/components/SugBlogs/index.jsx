import React from "react";
import "./style.css";
import BlogCard from "./BlogCard";
const SugBlogs = () => {
  return (
    <div className="sug-blogs d-flex flex-column gap-5">
      <h4 className="text-lg">For You</h4>
      <div className="d-flex flex-column gap-3">
        <BlogCard active={true} />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default SugBlogs;
