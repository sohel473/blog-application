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
            {/* if blogs tags length is greater than 3 then show first 3 tags
            with "..." else show all tags */}
            {blog.tags.length > 3
              ? blog.tags.slice(0, 3).map((tag) => {
                  return <span key={tag}>#{tag}</span>;
                })
              : blog.tags.map((tag) => {
                  return <span key={tag}>#{tag}</span>;
                })}
            {blog.tags.length > 3 && <span>{blog.tags.length - 3}+</span>}
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
