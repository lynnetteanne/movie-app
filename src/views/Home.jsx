import React from "react";
import Slider from "../components/Slider/Slider";
import Popular from "../components/Popular/Popular";
import Top from "../components/Top/Top";

function Home() {
  return (
    <>
        <Slider />
        <div className="movies-container">
          <Popular />
          <Top />
        </div>
        
    </>
  )
}

export default Home