import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../../features/blogs/BlogsSlice";
import BlogItem from "./BlogItem";
import Loading from "../ui/Loading";

export default function Blogs() {
  const dispatch = useDispatch();

  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );

  const { sort, filter } = useSelector((state) => state.sidebar);

  React.useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <div>{error}</div>;
  } else {
    // Sort blogs
    let sortedBlogs = [...blogs];
    if (sort === "newest") {
      sortedBlogs.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    }
    if (sort === "most_liked") {
      sortedBlogs.sort((a, b) => {
        return b.likes - a.likes;
      });
    }

    // Filter blogs
    let filteredBlogs = sortedBlogs;
    if (filter === "saved") {
      filteredBlogs = sortedBlogs.filter((blog) => blog.isSaved);
    }

    content = filteredBlogs.map((blog) => {
      return <BlogItem key={blog.id} blog={blog} />;
    });
  }

  return (
    <>
      {/* <!-- posts container  --> */}
      <main className="post-container" id="lws-postContainer">
        {content}
      </main>
      {/* <!-- posts container ends --> */}
    </>
  );
}
