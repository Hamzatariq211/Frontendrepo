import {Link} from "react-router-dom";
import React from "react";
import "./style.css";
import img3 from "../../../assets/images/blog3.png";
import profile from "../../../assets/images/person.png";
import { FaStar } from "react-icons/fa";
const BlogCard = ({title, name, id}) => {

  return (
    <Link to={`/blogs/${id}`} className="blog-card">
      <div className="d-flex gap-2">
        <img src={img3} alt="blog-img" loading="lazy" className="img-fluid" />
        <div className="d-flex flex-column justify-content-between flex-grow-1">
          <p className="text-sm">
           {title}
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
              <p className="text-sm-2">{name}</p>
              <span>
                <FaStar size={12} color="#E1D036" />
              </span>
            </div>
            {/* <button className="btn-account">Elon Musk</button> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
