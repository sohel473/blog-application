import React from "react";
import git from "../../assets/images/git.webp";
import { Link } from "react-router-dom";

export default function RelatedBlog() {
  return (
    <>
      <div className="card">
        <Link to={`/blogs/${1}`}>
          <img src={git} className="card-image" alt="" />
        </Link>
        <div className="p-4">
          <Link
            to={`/blogs/${1}`}
            className="text-lg post-title lws-RelatedPostTitle"
          >
            Top Github Alternatives
          </Link>
          <div className="mb-0 tags">
            <span>#python,</span> <span>#tech,</span> <span>#git</span>
          </div>
          <p>2010-03-27</p>
        </div>
      </div>
    </>
  );
}
