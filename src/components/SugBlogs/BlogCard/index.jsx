import React, { useEffect, useState } from "react";
import "./style.css";
import img3 from "../../../assets/images/blog3.png";
import profile from "../../../assets/images/person.png";
import { FaStar } from "react-icons/fa";
const BlogCard = ({active}) => {
  const [state, setState] = useState(false);
  useEffect(()=> {
    setState(active);
  }, [active]);
  return (
    <div className={`blog-card ${state ? "active" : ""}`}>
      <div className="d-flex gap-2">
        <img src={img3} alt="blog-img" loading="lazy" className="img-fluid" />
        <div className="d-flex flex-column justify-content-between flex-grow-1">
          <p className="text-sm">
            The climate crisis and the environment in Central Asia Is there
            hope?
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img
                src={profile}
                alt="profile-img"
                loading="lazy"
                width={15}
                height={15}
                className="rounded-circle"
              />
              <p className="text-sm-2">Joana</p>
              <span>
                <FaStar size={12} color="#E1D036" />
              </span>
            </div>
            <button className="btn-account">Elon Musk</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
