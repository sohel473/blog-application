import React from "react";
import Blogs from "../Components/Blogs/Blogs";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <section className="wrapper">
        <Sidebar />
        <Blogs />
      </section>
    </>
  );
}
