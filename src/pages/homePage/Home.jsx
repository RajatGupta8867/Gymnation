import React from "react";
import "./Home.css";
import Hero from "../../Components/hero/Hero";
import Sidebar from "../../Components/sidebar/Sidebar";
import Body from "../../Components/body/Body";
export default function Home() {
  return (
    <>
      <Hero />
      <Body />
      {/* <div className="home">
        <Posts />
        <Sidebar />
      </div> */}
    </>
  );
}
