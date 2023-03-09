import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { likeBlog, saveBlog } from "../../features/blog/BlogSlice";

export default function BlogDescription(props) {
  const { blog } = props;

  const { saveStatus, likes } = useSelector((state) => state.blog);

  const dispatch = useDispatch();

  // console.log(saveStatus);
  console.log(likes);

  const handleSave = () => {
    dispatch(saveBlog({ id: blog.id, saved: !saveStatus }));
  };

  const handleLike = () => {
    dispatch(likeBlog({ id: blog.id, count: likes + 1 }));
  };

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
            <button
              className="like-btn"
              id="lws-singleLinks"
              onClick={handleLike}
            >
              <i className="fa-regular fa-thumbs-up"></i> {blog.likes}
            </button>
            {/* <!-- handle save on button click --> */}
            {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
            <button
              className={`${blog.isSaved && "active"} save-btn`}
              id="lws-singleSavedBtn"
              onClick={handleSave}
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
