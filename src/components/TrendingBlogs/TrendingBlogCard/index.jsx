import React, { useEffect, useState } from "react";
import "./style.css";
import img from "../../../assets/images/blog4.png";
const TrendingBlogCard = ({active}) => {
  const [state, setState] = useState(false);
  useEffect(()=> {
    setState(active);
  }, [active]);
  return (
    <div className={`trending-blog-card ${state ? "active" : ""}`}>
      <div className="d-flex align-items-center gap-2">
        <img src={img} alt="blog-img" loading="lazy" className="img-fluid" />
        <p className="text-sm">How Will AI Image Generators Affect Artists?</p>
      </div>
    </div>
  );
};

export default TrendingBlogCard;
