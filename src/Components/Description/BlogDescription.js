import React from "react";

export default function BlogDescription(props) {
  const { blog } = props;

  return (
    <>
      <main className="post">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-md"
          id="lws-megaThumb"
        />
        <div>
          <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
            {blog.title}
          </h1>
          <div className="tags" id="lws-singleTags">
            {blog?.tags?.map((tag) => {
              return <span key={tag}>#{tag} </span>;
            })}
          </div>
          <div className="btn-group">
            {/* <!-- handle like on button click --> */}
            <button className="like-btn" id="lws-singleLinks">
              <i className="fa-regular fa-thumbs-up"></i> {blog.likes}
            </button>
            {/* <!-- handle save on button click --> */}
            {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
            <button
              className={`${blog.isSaved && "active"} save-btn`}
              id="lws-singleSavedBtn"
            >
              <i className="fa-regular fa-bookmark"></i>{" "}
              {blog.isSaved ? "Saved" : "Save"}
            </button>
          </div>
          <div className="mt-6">
            <p>{blog.description}</p>
          </div>
        </div>
      </main>
    </>
  );
}
