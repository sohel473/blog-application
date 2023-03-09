import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRelatedBlogs } from "../../features/relatedBlogs/RelatedBlogsSlice";
import Loading from "../ui/Loading";
import RelatedBlog from "./RelatedBlog";

export default function RelatedBlogs(props) {
  const { blogId, tags } = props;
  const dispatch = useDispatch();

  const { relatedBlogs, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlogs
  );

  // console.log(blogId);

  React.useEffect(() => {
    console.log(blogId);
    dispatch(fetchRelatedBlogs({ tags, id: blogId }));
  }, [dispatch, blogId, tags]);

  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <h1>{error}</h1>;
  } else {
    content = relatedBlogs.map((blog) => (
      <RelatedBlog key={blog.id} blog={blog} />
    ));
  }

  return (
    <>
      <aside>
        <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
          Related Posts
        </h4>
        <div className="space-y-4 related-post-container">
          {/* <!-- related post  --> */}
          {content}
          {/* <!-- related post ends --> */}
        </div>
      </aside>
    </>
  );
}
