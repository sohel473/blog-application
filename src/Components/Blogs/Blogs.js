import React from "react";
import BlogItem from "./BlogItem";

export default function Blogs() {
  return (
    <>
      {/* <!-- posts container  --> */}
      <main className="post-container" id="lws-postContainer">
        <BlogItem />
      </main>
      {/* <!-- posts container ends --> */}
    </>
  );
}
