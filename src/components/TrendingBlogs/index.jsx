import React from "react";
import "./style.css";
import TrendingBlogCard from "./TrendingBlogCard";
const TrendingBlogs = () => {
  return (
    <div className="trending-blogs d-flex flex-column gap-3">
      <h4 className="text-md">Trending</h4>
      <div>
        <TrendingBlogCard />
        <TrendingBlogCard />
      </div>
    </div>
  );
};

export default TrendingBlogs;
