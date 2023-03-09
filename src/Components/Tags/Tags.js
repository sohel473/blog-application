import React from "react";
import Tag from "./Tag";

export default function Tags() {
  return (
    <>
      <aside>
        <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
          Related Posts
        </h4>
        <div className="space-y-4 related-post-container">
          {/* <!-- related post  --> */}
          <Tag />
          {/* <!-- related post ends --> */}
        </div>
      </aside>
    </>
  );
}
