import React from "react";
import { Link } from "react-router-dom";
import BlogDescription from "../Components/Description/BlogDescription";
import RelatedBlogs from "../Components/RelatedBlogs/RelatedBlogs";

import { useSelector, useDispatch } from "react-redux";
import { fetchBlog } from "../features/blog/BlogSlice";
import { useParams } from "react-router-dom";
import Loading from "../Components/ui/Loading";

export default function Blog() {
  const dispatch = useDispatch();

  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );

  const { blogId } = useParams();

  // console.log(blogId);

  React.useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <h1>{error}</h1>;
  } else {
    content = <BlogDescription blog={blog} />;
  }

  // console.log(blogId);

  return (
    <>
      {/* <!-- Go Home / Go Back --> */}
      <div className="container mt-8">
        <Link
          to="/"
          className="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i className="mr-2 fa-solid fa-house"></i>Go Home
        </Link>
      </div>

      {/* <!-- detailed post container  --> */}
      <section className="post-page-container">
        {/* <!-- detailed post  --> */}
        {content}
        {/* <!-- detailed post ends --> */}

        {/* <!-- related posts --> */}
        <RelatedBlogs blogId={blogId} tags={blog.tags} />
        {/* <!-- related posts ends --> */}
      </section>
    </>
  );
}
