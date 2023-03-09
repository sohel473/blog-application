import React from "react";
import { Link } from "react-router-dom";

export default function RelatedBlog(props) {
  const { blog } = props;
  return (
    <>
      <div className="card">
        <Link to={`/blogs/${blog.id}`}>
          <img src={blog.image} className="card-image" alt={blog.title} />
        </Link>
        <div className="p-4">
          <Link
            to={`/blogs/${blog.id}`}
            className="text-lg post-title lws-RelatedPostTitle"
          >
            {blog.title}
          </Link>
          <div className="mb-0 tags">
            {blog?.tags?.map((tag) => (
              <span key={tag} className="tag">
                #{tag}
              </span>
            ))}
          </div>
          <p>{blog.createdAt}</p>
        </div>
      </div>
    </>
  );
}
