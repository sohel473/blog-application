import React from "react";
import RelatedBlog from "./RelatedBlog";

export default function RelatedBlogs() {
  return (
    <>
      <aside>
        <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
          Related Posts
        </h4>
        <div className="space-y-4 related-post-container">
          {/* <!-- related post  --> */}
          <RelatedBlog />
          {/* <!-- related post ends --> */}
        </div>
      </aside>
    </>
  );
}
