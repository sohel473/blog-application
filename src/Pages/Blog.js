import React from "react";
import { Link } from "react-router-dom";
import DetailedBlog from "../Components/Description/BlogDescription";
import Tags from "../Components/Tags/Tags";

export default function Blog() {
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
        <DetailedBlog />
        {/* <!-- detailed post ends --> */}

        {/* <!-- related posts --> */}
        <Tags />
        {/* <!-- related posts ends --> */}
      </section>
    </>
  );
}
