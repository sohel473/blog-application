import React from "react";
import { Link } from "react-router-dom";

export default function BlogItem(props) {
  const { blog } = props;
  return (
    <>
      {/* <!-- single post --> */}
      <div className="lws-card">
        <Link to={`/blogs/${blog.id}`}>
          <img
            src={blog.image}
            className="lws-card-image"
            alt={blog.title}
          />
        </Link>
        <div className="p-4">
          <div className="lws-card-header">
            <p className="lws-publishedDate">{blog.createdAt}</p>
            <p className="lws-likeCount">
              <i className="fa-regular fa-thumbs-up"></i> {blog.likes}
            </p>
          </div>
          <Link to={`/blogs/${1}`} className="lws-postTitle">
            {blog.title}
          </Link>
          <div className="lws-tags">
            {blog.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
          {/* <!-- Show this element if post is saved --> */}
          {blog.isSaved && (
            <div className="flex gap-2 mt-4">
              <span className="lws-badge"> Saved </span>
            </div>
          )}
          {/* <!-- Show this element if post is saved Ends --> */}
        </div>
      </div>
      {/* <!-- Single Post Ends --> */}
    </>
  );
}
