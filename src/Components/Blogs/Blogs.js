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
    content = blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />);
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
